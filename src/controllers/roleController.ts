import { Response } from 'express'
import test from '../authModules/test'
import keycloak from '../authModules/keycloakToken'
import address from '../authModules/keycloakAddress'
import json from '../authModules/json'
import { credentials } from '../@types/types'

function roleController(
  res: Response,
  eventType: string,
  component: string,
  authService: string,
  credentials: credentials
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
      console.log('Auth Type unkown')
      res.json(false)
      break
  }
}

export default roleController
