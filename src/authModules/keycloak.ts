import {Response} from 'express';
import fetch from 'cross-fetch'
import jwt_decode from "jwt-decode";
import checkAbilities from '../utils/checkAbilities';

interface decodedToken {
  exp?: number;
  iat?: number;
  jti?: string;
  iss?: string;
  aud?: string[] | string;
  sub?: string;
  nbf?: number;
  typ?: string;
  azp?: string;
  session_state?: string;
  acr?: string;
  realm_access?: { roles?: string[] | string };
  resource_access?: { account?: { roles?: string[] | string } };
  scope?: string;
  email_verified?: boolean;
  name?: string;
  preferred_username?: string;
  given_name?: string;
  family_name?: string;
  email?: string
}

export default async function keycloak(res: Response, token: string, eventType: string, component: string){
    const request = `Bearer ${token}`
    // Request to keyclock auth service will take place here...
    const url = 'https://keycloak-int.data-marketplace.io/auth/realms/marketplace/protocol/openid-connect/userinfo'

    const response = await fetch(url, {
        method: "GET",
         headers: {
          "Content-Type": "application/json",
          "Authorization": request
        },
        credentials: "same-origin"
      }).then(function(response) {
        return response.status
      }, function(error) {
        console.log(error.message) //=> String
        res.json(false);
      })
      console.log(response)
    if(response === 200){
      const decodedToken: decodedToken = jwt_decode(token);
      console.log(decodedToken.)
      const role = 'publisher'
      const response = checkAbilities(role, eventType, component);
      res.json(response);
    } else{
      res.json(false);
    }
    
}