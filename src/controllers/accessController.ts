import { Request, Response } from 'express'
import roleController from './roleController'
import assetController from './assetController'
import { requestCredentials } from '../@types/types'

function accessController(req: Request, res: Response): void {
  const {
    eventType,
    component,
    did,
    credentials
  }: {
    eventType: string
    component: string
    did?: string
    credentials: requestCredentials
  } = req.body
  let { authService }: { authService: string | undefined } = req.body
  if (authService === ('' || undefined)) {
    authService = process.env.DEFAULT_AUTH_SERVICE
  }

  if (eventType === 'consume') {
    // Allow & Deny lists are check when eventType === 'consume'
    assetController(res, eventType, component, did, authService, credentials)
  } else {
    // Only the role is checked for all other eventTypes
    roleController(res, eventType, component, authService, credentials)
  }
}

export default accessController
