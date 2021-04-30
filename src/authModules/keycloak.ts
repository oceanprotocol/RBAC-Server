import {Response} from 'express';
import fetch from 'cross-fetch'

export default async function keycloak(res: Response, credentials, eventType: String, component: String){
    console.log("Keycloak request");
    // Request to keyclock auth service will take place here...
    const url = 'https://keycloak-int.data-marketplace.io/auth/realms/marketplace/protocol/openid-connect/token'

    const response = await fetch(url, {
        method: "POST",
         headers: {
          "Content-Type": "application/json",
          "authentication": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJDWVdQTTJLY1NKUjJtV0o2ZFBqZTVKVmZ5YTZnZXdhVElVZDBabUoyWndFIn0.eyJleHAiOjE2MTk3Nzg4MTksImlhdCI6MTYxOTc3ODUxOSwianRpIjoiNjdkNTk4YTMtMDBlZS00MTFlLWExMjgtZWYyZmY0OWVkYTNkIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay1pbnQuZGF0YS1tYXJrZXRwbGFjZS5pby9hdXRoL3JlYWxtcy9tYXJrZXRwbGFjZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJkZDM2NDVlZi0zN2Q5LTQzMzQtOWEzYy1jMjczNTRkYmNkMWMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwb3J0YWwiLCJzZXNzaW9uX3N0YXRlIjoiZDBiYzgxOTItMmYxYi00YTVlLWFjNDktODE3OTgwZWNjNzdiIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL3BvcnRhbC1pbnQuZGF0YS1tYXJrZXRwbGFjZS5pbyJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJwdWJsaXNoZXIiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiamFtaWUgb2NlYW4iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJqYW1pZUBvY2Vhbi5jb20iLCJnaXZlbl9uYW1lIjoiamFtaWUiLCJmYW1pbHlfbmFtZSI6Im9jZWFuIiwiZW1haWwiOiJqYW1pZUBvY2Vhbi5jb20ifQ.fkOh139d5Qt9deJK--WHL7ZgumCeFDlkagN185bGy_LBmVHjUl51k093UllrHlo7hcUSmcA0y2drzsE4ZRvklBSemY-xzN6i3tLJGPrQ9vo3qQJwfhSFnHf5G0UN4a3wyMgspszqvdpXAc3Zbgjq8d_F2zkLloxRnMYOXrkfwm-zQc5tZx1x3JUnXFGW4vUOkr0XIOoGRxg54vA-8-mTaBcZx7qtno_X9YFEubKhboEPTIKecr2y63Icu3Xntnj_sQv26YXDvh7WLPEEGbyRAF3lBXAZ_MqW3mVvF0OU3sqsCgjU3XhJQ4-Uqeq1RX8PeZBtS9CDyAKaWJmntK45IQ"
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