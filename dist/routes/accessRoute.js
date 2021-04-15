"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
var access = require('../controllers/accessController');
router.post('/', function (req, res) {
    access(req, res);
});
module.exports = router;
//# sourceMappingURL=accessRoute.js.map