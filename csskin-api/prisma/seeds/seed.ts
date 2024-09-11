import { PrismaClient } from '@prisma/client';
import { seedItems } from './items/seed-item';

const prisma = new PrismaClient();

async function main() {
  await seedItems();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
