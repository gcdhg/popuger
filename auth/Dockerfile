FROM node:20.11.1-alpine3.19

RUN corepack enable pnpm

WORKDIR /auth

COPY ./ ./

RUN cd auth && pnpm install

EXPOSE 3000

CMD [ "pnpm", "run", "start:dev" ]
