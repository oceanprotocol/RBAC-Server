"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adminAbility = require('../abilities/adminAbility');
var publisherAbility = require('../abilities/publisherAbility');
var userAbility = require('../abilities/userAbility');
function checkAbilities(role, eventType, component) {
    var response;
    switch (role) {
        case "admin":
            response = adminAbility.can(eventType, component);
            return response;
        case "publisher":
            response = publisherAbility.can(eventType, component);
            return response;
        case "user":
            response = userAbility.can(eventType, component);
            return response;
    }
}
exports.default = checkAbilities;
//# sourceMappingURL=checkAbilities.js.map