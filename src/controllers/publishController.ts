import { Response } from 'express'
import roleController from './roleController'
import { requestCredentials } from '../@types/types'
import apiProviderAccess from '../authModules/other/apiProviderAccess'
import jsonProviderAccess from '../authModules/json/jsonProviderAccess'

async function publishController(
  res: Response,
  eventType: string,
  component: string,
  did: string,
  authService: string,
  credentials: requestCredentials,
  providerAddress: string
): Promise<void> {
  let providerAllowed: boolean
  if (authService === 'address') {
    // Checking from API if user is allowed to publish on provider
    providerAllowed = await apiProviderAccess(
      res,
      credentials.value,
      providerAddress
    )
  } else if (authService === 'json') {
    // Checking from JSON if user is allowed to publish on provider
    providerAllowed = await jsonProviderAccess(
      res,
      credentials.value,
      providerAddress
    )
  } else {
    console.error('Unrecognised authService')
    res.send(false)
    return
  }
  if (providerAllowed === true) {
    roleController(res, eventType, component, authService, credentials)
  } else {
    console.log('Profile is not allowed')
    res.send(false)
  }
}

export default publishController
