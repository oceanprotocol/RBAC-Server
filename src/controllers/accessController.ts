import {Request, Response} from 'express';
import test from '../authModules/test';
import keycloak from '../authModules/keycloak';
import json from '../authModules/json';

function accessController(req: Request, res: Response){
    const { eventType, component, credentials,  authService} = req.body;
    
    switch(authService){
        case "test":
            test(res, credentials, eventType, component);
            break;
        case "json": 
            json(res, credentials.address);
            break;
        case "keycloak": 
            keycloak(res, credentials.token, eventType, component);
            break;
        default:
            console.log("Auth Type unkown");
            const response = false;
            res.json(response);
            break;

    }
}

export default accessController;