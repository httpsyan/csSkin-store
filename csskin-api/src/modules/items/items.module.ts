import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { ItemsRepository } from './items.repository';

export const itemsModuleMock = {
  controllers: [ItemsController],
  providers: [ItemsService, ItemsRepository],
  exports: [ItemsService],
};

@Module(itemsModuleMock)
export class ItemsModule {}
