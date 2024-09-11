import { PrismaClient } from '@prisma/client';
import { data } from './data';

const prisma = new PrismaClient();

export async function seedItems() {
  await prisma.items.createMany({
    data,
  });
}
