# Role-Based Access Control Server

This is a proof-of-concept (POC) version of the Ocean role-based access control (RBAC) server.

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

## Sending requests

- Download and install [Postman](https://www.postman.com/downloads/)

- Send a POST request to `http://localhost:3000`

- Use one of the following JSON snippets as the body of the request:

```JSON
{ 
     "eventType": "publish", 
     "component": "market" , 
     "authService": "keycloak",
     "credentials": {
              "type": "address",
              "token": "0x0123456789"
     }
}
```

```JSON
{ 
     "eventType": "publish", 
     "component": "provider" , 
     "authService": "keycloak",
     "credentials": {
              "type": "Oauth2",
              "token": "0N2JK21J7I55U7HK8459J2N34506J43K"
     }
}
```

```JSON
{ 
     "eventType": "delete", 
     "component": "market" , 
     "authService": "keycloak",
     "credentials": {
              "type": "address",
              "token": "0x0123456789"
     }
}
```

```JSON
{ 
     "eventType": "publish", 
     "component": "market" , 
     "authService": "keycloak",
     "credentials": {
              "type": "3BoxProfile",
              "token": "0x9876543210"
     }
}
```

```JSON
{ 
     "eventType": "delete", 
     "component": "provider" , 
     "authService": "keycloak",
     "credentials": {
              "type": "Oauth2",
              "token": "0N2JK21J7I55U7HK8459J2N34506J43K"
     }
}
```


```JSON
{ 
     "eventType": "consume", 
     "component": "market" , 
     "authService": "keycloak",
     "credentials": {
              "type": "3BoxProfile",
              "token": "0x9876543210"
     }
}
```

```JSON
{ 
     "eventType": "publish", 
     "component": "market" , 
     "authService": "keycloak",
     "credentials": {
              "type": "Ldap",
              "token": "NJKJ7I5UHK45JNJ43K"
     }
}
```

```JSON
{ 
     "eventType": "publish", 
     "component": "provider" , 
     "authService": "keycloak",
     "credentials": {
              "type": "3BoxProfile",
              "token": "0x9876543210"
     }
}
```

```JSON
{ 
     "eventType": "delete", 
     "component": "market" , 
     "authService": "keycloak",
     "credentials": {
              "type": "3BoxProfile",
              "token": "0x9876543210"
     }
}
```

```JSON
{ 
     "eventType": "consume", 
     "component": "market" , 
     "authService": "keycloak",
     "credentials": {
              "type": "Ldap",
              "token": "NJKJ7I5UHK45JNJ43K"
     }
}
```