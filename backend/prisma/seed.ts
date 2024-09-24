import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const sampleEvents = [
  { event_name: 'Soccer: Team A vs. Team B', odds: 1.75 },
  { event_name: 'Basketball: Team C vs. Team D', odds: 2.1 },
  { event_name: 'Tennis: Player E vs. Player F', odds: 1.9 },
  { event_name: 'Baseball: Team G vs. Team H', odds: 1.85 },
  { event_name: 'Hockey: Team I vs. Team J', odds: 2.0 },
];

const sampleUser = {
  email: 'test@gmdm.com',
  password: '$2b$08$SdG5xJBym/s9o/GwIrbetukZP9B/PCMD9cs8DTiL6SMJwprQpe4sC', // password: Password123!
  accessTokenSalt: 'random-salt', // TODO use randomstring to generate random salt
};

async function main() {
  console.log('SEEDING STARTED ===>');

  await prisma.$transaction([
    prisma.user.create({
      data: sampleUser,
    }),
    prisma.sportEvent.createMany({
      data: sampleEvents,
    }),
  ]);

  console.log('SEEDING COMPLETED ===>');
}

main()
  .catch(e => {
    console.error(e, 'FAILED TO SEED');
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
