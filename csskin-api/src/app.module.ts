import { Module } from '@nestjs/common';
import { ItemsModule } from './modules/items/items.module';
import { PrismaModule } from './infra/database/prisma/prisma.module';

@Module({
  imports: [ItemsModule, PrismaModule],
})
export class AppModule {}
