import { checkRole } from '../utils/checkRole';
const checkAbilities = require('../utils/checkAbilities');

function accessController(req, res, next){
    console.log("Request:", req.body);
    const { eventType, component, credentials } = req.body;

    const role = checkRole(credentials.type, credentials.id);
    console.log("role:", role);
    const response = checkAbilities(role, eventType, component);
    console.log("Permission response:", response);
    res.json(response);
}

module.exports = accessController;