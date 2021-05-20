FROM node:14

COPY package*.json /usr/src/app/
WORKDIR /usr/src/app
# If you are building your code for production
#RUN npm ci --only=production
RUN npm i
COPY . /usr/src/app
RUN npm run build

# Replace KEYCLOAK_URL with the relevant URL for your own Keycloak hosting
ENV KEYCLOAK_URL="INSERT_KEYCLOAK_URL_HERE"
EXPOSE 3000
CMD [ "npm", "run", "start" ]
