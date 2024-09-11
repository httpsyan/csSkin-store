import { Injectable } from '@nestjs/common';
import { ServiceBase } from 'src/common/base';
import { QueryBuilder } from 'src/common/utils';
import { SearchItemDto } from 'src/domain/dtos';
import { FindAllResultEntity, ItemsEntity } from 'src/domain/entities';
import { ItemsRepository } from './items.repository';

@Injectable()
export class ItemsService implements ServiceBase<ItemsEntity> {
  constructor(private readonly itemsRepository: ItemsRepository) {}

  async findAll(
    queryParams: SearchItemDto,
  ): Promise<FindAllResultEntity<ItemsEntity>> {
    const { name, category, float, priceMin, priceMax } = queryParams;

    const floatType = float?.split(',');

    const { query } = new QueryBuilder()
      .condition({
        name: name && {
          contains: name,
        },
        category: category && category,
        float: float && {
          // index 0 = value
          // index 1 = type, aceitando apenas 'gte' ou 'lte'
          [floatType[1]]: floatType[0],
        },
        price: {
          gte: priceMin && priceMin,
          lte: priceMax && priceMax,
        },
      })
      .sort(queryParams.orderBy)
      .date('createdAt')
      .pagination(queryParams.page, queryParams.pageSize);

    const data = await this.itemsRepository.findAll(query);
    const total = await this.itemsRepository.count(query.where);

    const info = {
      page: queryParams.page,
      pages: Math.ceil(total / queryParams.pageSize),
      pageSize: queryParams.pageSize,
      total,
    };

    return { data, info };
  }
}
