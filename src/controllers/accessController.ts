import { Request, Response } from 'express'
import roleController from './roleController'
import assetController from './assetController'

function accessController(req: Request, res: Response): void {
  const { eventType, did, credentials } = req.body

  if (eventType === 'consume') {
    console.log('Check allow / deny list')
    assetController(did, credentials)
  } else {
    console.log('Only check role')
    roleController(req, res)
  }
}

export default accessController
