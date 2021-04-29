import {Request, Response} from 'express';
import test from '../authModules/test';
import keycloack from '../authModules/keycloak';

function accessController(req: Request, res: Response){
    console.log("Request:", req.body);
    const { eventType, component, credentials,  authService} = req.body;
    
    switch(authService){
        case "test":
            test(res, credentials, eventType, component);
            break;
        case "keycloack":
            keycloack(res, credentials, eventType, component);
            break;

    }


}

export default accessController;