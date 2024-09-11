import { Controller, Get, Query } from '@nestjs/common';
import { ItemsService } from './items.service';
import { SearchItemDto } from 'src/domain/dtos';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(@Query() queryParams: SearchItemDto) {
    return this.itemsService.findAll(queryParams);
  }
}
