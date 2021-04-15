"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var accessController_1 = __importDefault(require("../controllers/accessController"));
var express = require('express');
var router = express.Router();
router.post('/', function (req, res) {
    accessController_1.default(req, res);
});
module.exports = router;
//# sourceMappingURL=accessRoute.js.map