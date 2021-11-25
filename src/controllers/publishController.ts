import { Response } from 'express'
import roleController from './roleController'
import { requestCredentials } from '../@types/types'

async function publishController(
  res: Response,
  eventType: string,
  component: string,
  did: string,
  authService: string,
  credentials: requestCredentials
): Promise<void> {
  let providerAllowed: boolean

  if (providerAllowed === true) {
    roleController(res, eventType, component, authService, credentials)
  } else {
    console.log('Profile is not allowed')
    res.send(false)
  }
}

export default publishController
