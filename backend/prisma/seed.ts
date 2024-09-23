import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const sampleEvents = [
  { name: 'Soccer: Team A vs. Team B', odds: 1.75 },
  { name: 'Basketball: Team C vs. Team D', odds: 2.1 },
  { name: 'Tennis: Player E vs. Player F', odds: 1.9 },
  { name: 'Baseball: Team G vs. Team H', odds: 1.85 },
  { name: 'Hockey: Team I vs. Team J', odds: 2.0 },
];

async function main() {
  for (const event of sampleEvents) {
    await prisma.sportEvent.create({
      data: event,
    });
  }

  console.log('SEEDING COMPLETED ===');
}

main()
  .catch(e => {
    console.error('FAILED TO SEED ====> ', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
