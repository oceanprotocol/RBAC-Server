FROM node:14

# Replace KEYCLOAK_URL with the relevant URL for your own Keycloak hosting
ENV KEYCLOAK_URL="https://keycloak-int.data-marketplace.io/auth/realms/marketplace/protocol/openid-connect/userinfo"

# Create app directory
WORKDIR /docker/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# RUN npm install
# If you are building your code for production
RUN npm ci --only=production

# Bundle app source
COPY ./dist .

EXPOSE 3000

CMD [ "node", "app.js" ]
