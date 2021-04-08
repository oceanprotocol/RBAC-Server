const express = require('express');
const router = express.Router();
const access = require('../controllers/accessController');

/* GET Access role premissions. */
router.get('/', function(req, res, next) {
    access(req, res, next);
});

module.exports = router;