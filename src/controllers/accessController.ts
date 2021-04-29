import {Request, Response} from 'express';
import test from '../authModules/test';
import keycloak from '../authModules/keycloak';

function accessController(req: Request, res: Response){
    console.log("Request:", req.body);
    const { eventType, component, credentials,  authService} = req.body;
    
    switch(authService){
        case "test":
            test(res, credentials, eventType, component);
            break;
        case "keycloak": 
            keycloak(res, credentials, eventType, component);
            break;
        default:
            console.log("Auth Type unkown");
            const response = false;
            res.json(response);
            break;

    }
}

export default accessController;