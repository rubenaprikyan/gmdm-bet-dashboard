import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const sampleEvents = [
    { eventName: 'Soccer: Team A vs. Team B', odds: 1.75 },
    { eventName: 'Basketball: Team C vs. Team D', odds: 2.1 },
    { eventName: 'Tennis: Player E vs. Player F', odds: 1.9 },
    { eventName: 'Baseball: Team G vs. Team H', odds: 1.85 },
    { eventName: 'Hockey: Team I vs. Team J', odds: 2.0 },
  ];

  for (const event of sampleEvents) {
    await prisma.sportsEvent.create({
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
