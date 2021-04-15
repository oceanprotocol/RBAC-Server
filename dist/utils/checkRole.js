"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users = require('../data/users.json');
function checkRole(type, id) {
    console.log("type:", type);
    console.log("id:", id);
    for (var i = 0; i < users.length; i++) {
        if (users[i].authType === type && users[i].auth === id) {
            return users[i].role;
        }
    }
}
exports.checkRole = checkRole;
//# sourceMappingURL=checkRole.js.map