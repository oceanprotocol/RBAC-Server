const checkRole = require('../utils/checkRole');

function access(req, res, next){
    console.log("Request:", req.body);
    const { eventType, component, credentials } = req.body;

    const role = checkRole(credentials.type, credentials.id);
    console.log("role:", role);


    res.send("Test 1 - true");
}

module.exports = access;