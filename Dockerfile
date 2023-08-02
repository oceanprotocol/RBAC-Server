FROM ubuntu:20.04 as base
RUN apt-get update && apt-get -y install bash curl
RUN curl -sL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh
RUN bash /tmp/nodesource_setup.sh
RUN apt install nodejs



FROM base as builder
RUN apt-get update && apt-get -y install wget
COPY . /usr/src/app
WORKDIR /usr/src/app/
ENV NODE_ENV=production
RUN npm ci
RUN npm run build

FROM base as runner
ENV NODE_ENV=production
COPY . /usr/src/app
WORKDIR /usr/src/app/
COPY --from=builder /usr/src/app/node_modules/ /usr/src/app/node_modules/
COPY --from=builder /usr/src/app/dist/ /usr/src/app/dist/
ENV KEYCLOAK_URL="INSERT_KEYCLOAK_URL_HERE"
EXPOSE 3000
CMD [ "npm", "run", "start" ]