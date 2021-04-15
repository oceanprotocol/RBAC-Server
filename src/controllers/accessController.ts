import { checkRole } from '../utils/checkRole';
import {Request, Response} from 'express';
const checkAbilities = require('../utils/checkAbilities');

export function accessController(req: Request, res: Response){
    console.log("Request:", req.body);
    const { eventType, component, credentials } = req.body;

    const role = checkRole(credentials.type, credentials.id);
    console.log("role:", role);
    const response = checkAbilities(role, eventType, component);
    console.log("Permission response:", response);
    res.json(response);
}