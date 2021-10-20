# Role-Based Access Control Server

This is the Ocean role-based access control (RBAC) server. The RBAC server is used to implement fine-grained permissions on browsing, consumer and publishing data assets. The permissions are controlled precisely at two levels:

- Marketplace-level permissions for browsing, consuming or publishing within a marketplace frontend. The RBAC checks the user's role and restricts their ability to interact with the market based on the abilities associated with that role.
- Asset-level permissions on consuming a specific asset. This is supported through allow and deny lists. In addition to checking the role, the RBAC server also requests the DDO from aquarius and checks if the user's profile is in either the allow or deny list. This check only takes place on requests with the `"eventType"= "consume"`.

User profiles and roles can be stored in [Keycloak](https://www.keycloak.org/) or in json. The functionality has also been designed so that it is easy to expand to use other identity management services.

## Getting started

In order to start user the RBAC server:

1. Clone this repository:

```Bash
git clone https://github.com/oceanprotocol/RBAC-Server.git
cd RBAC-Server
```

2. Install the dependancies:

```Bash
npm install
```

3. Build the service

```Bash
npm run build
```

4. Start the server

```Bash
npm run start
```

## Running in Docker

1. Replace the KEYCLOAK_URL in the Dockerfile with the correct URL for your hosting of keycloak.
2. Run the following command to build the RBAC service in a Docker container:

```Bash
npm run build:docker
```

3. Next, run the following command to start running the RBAC service in the Docker container:

```Bash
npm run start:docker
```

4. Now you are ready to send requests to the RBAC server via postman. Make sure to replace the URL to `http://localhost:49160` in your requests.

## Environmental Variable List

- KEYCLOAK_URL = [Optional] URL for requesting user roles with a JWT login token
- KEYCLOAK_ADDRESS_URL = [Optional] URL for requesting user roles with an Ethereum address
- KEYCLOAK_PROFILE_URL = [Optional] URL for requesting user profiles with an Ethereum address
- DEFAULT_AUTH_SERVICE = [Required] Either "json" or "keycloak". This will determin where the RBAC server looks for the roles and profiles.
- JSON_DATA = [Optional] json of user roles. This is required for deployment to Barge.
- JSON_PROFILE_DATA = [Optional] json of user profiles. This is required for deployment to Barge.
- METADATACACHE_URI = [Required] URI of Aquarius instance.

## Setting Default Auth Service

You can change the default auth service in the .env file e.g. `DEFAULT_AUTH_SERVICE = "keycloak"`. This is the auth service that will be used if no `authService` is defined within the request.

## Sending Requests

### Step 1

- Download and install [Postman](https://www.postman.com/downloads/)

### Step 2

- Start the RBAC server either locally or in a docker container (see instructions above).

### Step 3

- Now send a `POST` request to the RBAC URL, if you are running it locally the address will be `http://localhost:3000`.

The body of the request should be in the following format:

```JSON
{
     "eventType": "publish",
     "component": "market" ,
     "credentials": {
              "type": "address",
              "value": "0xETHEURM_ADRESS"
     }
}
```

#### Consume requests

If the eventType is "consume" the request format must include the did of the asset. This is because the DDO needs to be requested and checked for an allow or deny list. For example:

```JSON
{
     "eventType": "consume",
     "component": "market" ,
     "did": "did:op:e0089c4BAC163b571649f6AC4614580f968A2294",
     "credentials": {
              "type": "address",
              "value": "0xETHEURM_ADRESS"
     }
}
```

## ✨ Code Style

Code style is automatically enforced through [ESLint](https://eslint.org) & [Prettier](https://prettier.io) rules:

- Git pre-commit hook runs `prettier` on staged files, setup with [Husky](https://typicode.github.io/husky)
- VS Code suggested extensions and settings for auto-formatting on file save

For running linting and auto-formatting manually, you can use from the root of the project:

```bash
# linting check, also runs Typescript typings check
npm run lint

# auto format all files in the project with prettier, taking all configs into account
npm run format
```
