import {Request, Response} from 'express';
const express = require('express');

const router = express.Router();
const access = require('../controllers/accessController');

/* GET Access role premissions. */
router.post('/', function(req: Request, res: Response) {
    access(req, res);
});

module.exports = router;