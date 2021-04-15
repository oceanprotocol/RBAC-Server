"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var checkRole_1 = require("../utils/checkRole");
var checkAbilities_1 = __importDefault(require("../utils/checkAbilities"));
function accessController(req, res) {
    console.log("Request:", req.body);
    var _a = req.body, eventType = _a.eventType, component = _a.component, credentials = _a.credentials;
    var role = checkRole_1.checkRole(credentials.type, credentials.id);
    console.log("role:", role);
    var response = checkAbilities_1.default(role, eventType, component);
    console.log("Permission response:", response);
    res.json(response);
}
exports.default = accessController;
//# sourceMappingURL=accessController.js.map