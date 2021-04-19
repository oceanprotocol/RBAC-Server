import {Request, Response} from 'express';
import accessController from '../controllers/accessController';
const express = require('express');

const router = express.Router();

/* GET Access role premissions. */
router.post('/', function(req: Request, res: Response) {
    accessController(req, res);
});

module.exports = router;