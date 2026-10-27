export const profileSeed = {
  name: 'Имя Фамилия',
  description:
    'Backend-разработчик. Проектирую и разрабатываю API на TypeScript, Node.js и NestJS. (Заглушка: замените на своё описание.)',
  links: [
    { label: 'GitHub', url: 'https://github.com/your-username' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/your-username' },
  ],
  skills: [
    'TypeScript',
    'Node.js',
    'NestJS',
    'GraphQL',
    'Prisma',
    'PostgreSQL',
    'Docker',
    'Git',
  ],
  experience: [
    {
      company: 'Компания Б',
      position: 'Senior Backend Developer',
      startDate: new Date('2022-03-01'),
      endDate: null,
      achievements: [
        'Заглушка: спроектировал и запустил новый сервис.',
        'Заглушка: сократил время ответа API на 40%.',
      ].join('\n'),
    },
    {
      company: 'Компания А',
      position: 'Backend Developer',
      startDate: new Date('2019-06-01'),
      endDate: new Date('2022-02-28'),
      achievements: [
        'Заглушка: разработал REST API для внутренней платформы.',
        'Заглушка: настроил CI/CD и контейнеризацию сервисов.',
      ].join('\n'),
    },
  ],
  projects: [
    {
      name: 'Проект 1 (заглушка)',
      url: 'https://github.com/your-username/project-one',
    },
    {
      name: 'Проект 2 (заглушка)',
      url: 'https://github.com/your-username/project-two',
    },
  ],
};
