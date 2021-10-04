import { Request, Response } from 'express'
import roleController from './roleController'

interface credentials {
  type: string
  value: string
}

function assetController(
  res: Response,
  did: string,
  authService: string,
  credentials: credentials
): void {
  console.log({ did, credentials })
  switch (authService) {
    case 'json':
      console.log('Checking DDO from json')
      break
    case 'keycloak':
      console.log('checking DDO')
      break
    default:
  }

  res.send(true)
}

export default assetController
