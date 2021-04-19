import { checkRole } from '../utils/checkRole';
import {Request, Response} from 'express';
import checkAbilities from '../utils/checkAbilities';

function accessController(req: Request, res: Response){
    console.log("Request:", req.body);
    const { eventType, component, credentials } = req.body;

    const role = checkRole(credentials.type, credentials.id);
    console.log("role:", role);
    const response = checkAbilities(role, eventType, component);
    console.log("Permission response:", response);
    res.json(response);
}

export default accessController;