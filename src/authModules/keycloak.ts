import {Response} from 'express';
import fetch from 'cross-fetch'

export default async function keycloak(res: Response, credentials, eventType: String, component: String){
    const request = `Bearer ${credentials.token}`
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
          console.log("Response:", response)
        response.status     //=> number 100–599
        response.statusText //=> String
        response.headers    //=> Headers
        response.url        //=> String
      
        return response.text()
      }, function(error) {
        error.message //=> String
      })
    
    res.json(response);
}