import {Response} from 'express';

export default function keycloak(res: Response, credentials, eventType: String, component: String){
    console.log("Keycloack")
    // Request to keyclock auth service will take place here...
    const response = true;
    res.json(response);
}