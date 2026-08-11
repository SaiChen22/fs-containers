FROM node:24

WORKDIR /usr/src/app

COPY . .

# Change pnpm to pnpm install since we are going to be in development mode
RUN corepack enable && pnpm install --frozen-lockfile
# pnpm run dev is the command to start the application in development mode
CMD ["pnpm", "run", "dev", "--host"]