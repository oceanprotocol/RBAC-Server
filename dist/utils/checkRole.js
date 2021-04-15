"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRole = void 0;
var users_1 = __importDefault(require("../data/users"));
function checkRole(type, id) {
    console.log("type:", type);
    console.log("id:", id);
    for (var i = 0; i < users_1.default.length; i++) {
        if (users_1.default[i].authType === type && users_1.default[i].auth === id) {
            return users_1.default[i].role;
        }
    }
}
exports.checkRole = checkRole;
//# sourceMappingURL=checkRole.js.map