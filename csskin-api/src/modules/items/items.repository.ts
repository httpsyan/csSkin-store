import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from 'src/common/factories';
import { ItemsEntity, QueryBuilderEntity } from 'src/domain/entities';

@Injectable()
export class ItemsRepository extends RepositoryFactory<ItemsEntity> {
  constructor() {
    super('items');
  }

  findAll(query: QueryBuilderEntity): Promise<ItemsEntity[]> {
    return this.prismaService.items.findMany(query);
  }
}
