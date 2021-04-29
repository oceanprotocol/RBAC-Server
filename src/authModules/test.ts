import {Response} from 'express';
import { checkRole } from '../utils/checkRole';
import checkAbilities from '../utils/checkAbilities';

export default function test(res: Response, credentials, eventType: String, component: String){
    const role = checkRole(credentials.type, credentials.token);
    console.log("role:", role);
    const response = checkAbilities(role, eventType, component);
    console.log("Permission response:", response);
    res.json(response);
}
