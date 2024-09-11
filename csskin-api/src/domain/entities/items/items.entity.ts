import { Items } from '@prisma/client';

export class ItemsEntity implements Items {
  id: string;
  name: string;
  image: string;
  category: string;
  float: string | null;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
