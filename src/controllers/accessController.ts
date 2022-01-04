import { Request, Response } from 'express'
import roleController from './roleController'
import assetController from './assetController'
import { requestCredentials } from '../@types/types'
import eventTypeAPI from '../authModules/other/eventTypeAPI'
import { reqBody } from '../@types/types'

async function accessController(body: reqBody, res: Response) {
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
    providerAddress?: string
  } = body
  let authService = body.authService
  if (authService === ('' || undefined)) {
    authService = process.env.DEFAULT_AUTH_SERVICE
  }
  // First check permission in eventType API endpoint
  const eventTypeCheck = await eventTypeAPI(body)
  if (eventTypeCheck === false) {
    res.send(false)
    return
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
