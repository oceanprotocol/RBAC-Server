import {Request, Response} from 'express';
import test from '../authModules/test';
import keycloak from '../authModules/keycloak';

function accessController(req: Request, res: Response){
    const { eventType, component, credentials } = req.body;
    let { authService } = req.body;
    if (authService === ('' || undefined)){ authService = process.env.DEFAULT_AUTH_SERVICE };
    
    switch(authService){
        case "test":
            test(res, credentials, eventType, component);
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