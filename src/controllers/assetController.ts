import { Request, Response } from 'express'
import roleController from './roleController'
import getDDO from '../utils/getDDO'
import checkProfile from '../authModules/keycloackCheckDDO'

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

  if (authService === 'keycloak') {
    console.log('checking DDO from keycloak')
    const profile = await checkProfile(res, credentials.value)
    console.log({ profile })
  } else if (authService === 'json') {
    console.log('Checking DDO from json')
  } else {
    console.log('Unrecognised authService')
  }

  res.send(true)
}

export default assetController
