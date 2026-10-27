FROM node:22-slim AS build
RUN apt-get update -y \
  && apt-get install -y --no-install-recommends openssl \
  && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY package.json package-lock.json ./
COPY prisma ./prisma
RUN npm i
COPY tsconfig.json tsconfig.build.json nest-cli.json ./
COPY src ./src
RUN npm run build

FROM node:22-slim AS runtime
RUN apt-get update -y \
  && apt-get install -y --no-install-recommends openssl \
  && rm -rf /var/lib/apt/lists/*
ENV NODE_ENV=production
WORKDIR /app
COPY package.json package-lock.json ./
COPY prisma ./prisma
RUN npm i --omit=dev
COPY --from=build /app/dist ./dist
COPY docker-entrypoint.sh ./
USER node
EXPOSE 3000
CMD ["sh", "docker-entrypoint.sh"]
