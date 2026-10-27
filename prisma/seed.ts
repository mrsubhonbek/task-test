import { PrismaClient } from '@prisma/client';
import { profileSeed } from './seed-data';

const prisma = new PrismaClient();

async function main() {
  const { links, skills, experience, projects, ...profile } = profileSeed;

  await prisma.$transaction([
    prisma.profile.deleteMany(),
    prisma.profile.create({
      data: {
        ...profile,
        links: { create: links },
        skills: { create: skills.map((name) => ({ name })) },
        experience: { create: experience },
        projects: { create: projects },
      },
    }),
  ]);
}

void main()
  .catch((error) => {
    console.error('Seed failed:', error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
