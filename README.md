# Визитка (backend)

GraphQL API с профилем разработчика: ссылки, навыки, опыт работы и проекты.
NestJS, Prisma, GraphQL (Apollo), PostgreSQL, Docker.

## Запуск

```bash
docker compose up --build
```

Контейнер сам применит миграции, заполнит БД из `prisma/seed-data.ts` и запустит приложение.
Apollo Sandbox: <http://localhost:3000/graphql>

```graphql
query {
  profile {
    name
    description
    links { label url }
    skills { name }
    experience { company position startDate endDate achievements }
    projects { name url }
  }
}
```

Тест: `npm run test` (нужна запущенная БД).

## Структура

- `ProfileResolver` описывает GraphQL-схему и вызывает сервис.
- `ProfileService` ходит в БД через Prisma.
- `PrismaService` отвечает только за подключение.
- `prisma/` содержит схему, миграции и seed.
