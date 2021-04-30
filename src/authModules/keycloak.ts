import {Response} from 'express';
import fetch from 'cross-fetch'

export default async function keycloak(res: Response, credentials, eventType: String, component: String){
    console.log("Keycloak request 2");
    // Request to keyclock auth service will take place here...
    const url = 'https://keycloak-int.data-marketplace.io/auth/realms/marketplace/protocol/openid-connect/userinfo'

    const response = await fetch(url, {
        method: "GET",
         headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJDWVdQTTJLY1NKUjJtV0o2ZFBqZTVKVmZ5YTZnZXdhVElVZDBabUoyWndFIn0.eyJleHAiOjE2MTk3ODk5MjksImlhdCI6MTYxOTc4OTYyOSwianRpIjoiZWFlZDJiNzktZWRlZi00NTZhLWI0M2UtMDA3YmViZThjOTA5IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay1pbnQuZGF0YS1tYXJrZXRwbGFjZS5pby9hdXRoL3JlYWxtcy9tYXJrZXRwbGFjZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJkZDM2NDVlZi0zN2Q5LTQzMzQtOWEzYy1jMjczNTRkYmNkMWMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwb3J0YWwiLCJzZXNzaW9uX3N0YXRlIjoiODQ0ZmMwYjYtMWE0ZC00ZTdiLTliYTQtZmM1NzhjOWRkMGVjIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL3BvcnRhbC1pbnQuZGF0YS1tYXJrZXRwbGFjZS5pbyJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJwdWJsaXNoZXIiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiamFtaWUgb2NlYW4iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJqYW1pZUBvY2Vhbi5jb20iLCJnaXZlbl9uYW1lIjoiamFtaWUiLCJmYW1pbHlfbmFtZSI6Im9jZWFuIiwiZW1haWwiOiJqYW1pZUBvY2Vhbi5jb20ifQ.dg8j4YGVFsbne8wqSiHoiJGyaCBYDwNhidbSquo4HXJ5Nq6DlkYnBm2JGfl_Mb-awAPrVLY-vgZhBSGSsZAbzInT23xtiqtcwML6FK-KxCN9pPdAiagmt3y2XZeipzJ-nm8idPxJhjN-FinRyxky41Zw9I-mfzE6IvuEAd4px6SFqgn581o_6Jov0j02w6BeJHBHPSzLhOINSeJTPL1q_mJGGqjN0DyurM5MYGuySS0NMlym1DMCJcwIh8o1DXeJuBWqOfy8tINbWmfuv00tQERivkT8QG_EKhWeBsIJkhJUMCX2emp7KKD13tsyoOBbJA239W3_pWPgYfUrqIPJxQ"
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