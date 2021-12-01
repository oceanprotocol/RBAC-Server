import { Response } from 'express'
import test from '../authModules/other/test'
import keycloak from '../authModules/keycloak/keycloakToken'
import address from '../authModules/keycloak/keycloakAddress'
import json from '../authModules/json/json'
import { requestCredentials } from '../@types/types'

function roleController(
  res: Response,
  eventType: string,
  component: string,
  authService: string,
  credentials: requestCredentials
): void {
  switch (authService) {
    case 'test':
      test(res, credentials, eventType, component)
      break
    case 'json':
      json(res, credentials.value, eventType, component)
      break
    case 'keycloak':
      keycloak(res, credentials.value, eventType, component)
      break
    case 'address':
      address(res, credentials.value, eventType, component)
      break
    default:
      console.error('Auth Type unknown')
      res.json(false)
      break
  }
}

export default roleController
