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

    const responseStatus = await fetch(url, {
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
      console.log(responseStatus)
    if(responseStatus === 200){
      const decodedToken: decodedToken = jwt_decode(token);
      console.log(decodedToken)
      const role = decodedToken.realm_access.roles
      let response: boolean;
      for(let i: number = 0; i < role.length; i++){
        console.log("role[i]", role[i])
        response = checkAbilities(role[i], eventType, component);
      console.log("response",  i, response)
        if(response === true){
          break
        } else{
          continue
        }
      } 
      console.log("response", response)
      res.json(response);
    } else{
      res.json(false);
    }
    
}