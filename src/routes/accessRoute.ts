import { Request, Response } from 'express'
import accessController from '../controllers/accessController'
import express from 'express'

const router = express.Router()

/* GET Access role premissions. */
router.post('/', function (req: Request, res: Response) {
  accessController(req, res)
})

export default router
