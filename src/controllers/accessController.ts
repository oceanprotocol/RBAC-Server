import { Request, Response } from 'express'
import test from '../authModules/test'
import keycloak from '../authModules/keycloakToken'
import address from '../authModules/keycloakAddress'
import json from '../authModules/json'

function accessController(req: Request, res: Response): void {
  const { eventType, component, credentials } = req.body
  let { authService } = req.body
  if (authService === ('' || undefined)) {
    authService = process.env.DEFAULT_AUTH_SERVICE
  }

  switch (authService) {
    case 'test':
      test(res, credentials, eventType, component)
      break
    case 'json':
      json(res, credentials.address)
      break
    case 'keycloak':
      console.log('credentials.address', credentials.address)
      keycloak(res, credentials.address, eventType, component)
      break
    case 'address':
      console.log('Address request')
      address(res, credentials.address, eventType, component)
      break
    default:
      console.log('Auth Type unkown')
      res.json(false)
      break
  }
}

export default accessController
