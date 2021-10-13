import { Request, Response } from 'express'
import roleController from './roleController'
import getDDO from '../utils/getDDO'

interface credentials {
  type: string
  value: string
}

async function assetController(
  res: Response,
  did: string,
  authService: string,
  credentials: credentials
): Promise<void> {
  console.log({ did, credentials })
  console.log('Request DDO from aquarius')
  const DDO = await getDDO(did)
  console.log({ DDO })

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
