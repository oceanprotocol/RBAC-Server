import { Request, Response } from 'express'
import roleController from './roleController'
import assetController from './assetController'
import { credentials } from '../@types/types'

function accessController(req: Request, res: Response): void {
  const {
    eventType,
    did,
    component,
    credentials
  }: {
    eventType: string
    did: string
    component: string
    credentials: credentials
  } = req.body
  let { authService }: { authService: string | undefined } = req.body
  if (authService === ('' || undefined)) {
    authService = process.env.DEFAULT_AUTH_SERVICE
  }

  if (eventType === 'consume') {
    console.log('Check allow / deny list')
    assetController(res, did, authService, credentials)
  } else {
    console.log('Only check role')
    roleController(res, eventType, component, authService, credentials)
  }
}

export default accessController
