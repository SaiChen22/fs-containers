FROM node:24 AS base

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN corepack enable && pnpm install --frozen-lockfile

ENV VITE_BACKEND_URL=http://localhost:8080/api/


FROM base AS test-stage

RUN pnpm run test


# 从 test-stage 继承：测试失败就无法进入构建阶段
FROM test-stage AS build-stage

RUN pnpm run build


FROM nginx:1.29-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html