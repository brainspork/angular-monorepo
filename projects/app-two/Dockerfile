FROM node:current-alpine3.15 as base

FROM base as install
WORKDIR /app
COPY projects/app-two projects/app-two
COPY projects/shared-library projects/shared-library
COPY angular.json .
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
RUN npm i

FROM install as build
WORKDIR /app
RUN npm run build:app-two

FROM nginx:latest as server

RUN mkdir /etc/nginx/templates
COPY projects/app-two/nginx.conf /etc/nginx/nginx.conf
COPY projects/app-two/default.conf.template /etc/nginx/templates
COPY --from=build /app/dist/app-two/. /usr/share/nginx/html