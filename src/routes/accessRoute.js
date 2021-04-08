const express = require('express');
const router = express.Router();
const access = require('../conrollers/accessController');

/* GET role. */
router.get('/', function(req, res, next) {
    access(res);
});

module.exports = router;