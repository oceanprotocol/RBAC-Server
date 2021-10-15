import { Request, Response } from 'express'
import roleController from './roleController'
import getDDO from '../utils/getDDO'
import getProfile from '../authModules/keycloackGetProfile'
import { credentials } from '../@types/types'

async function assetController(
  res: Response,
  did: string,
  authService: string,
  credentials: credentials
): Promise<void> {
  console.log('Request DDO from aquarius')
  const ddo = await getDDO(did)
  const ddoCredentials = ddo.credentials
  console.log({ ddoCredentials })
  if (ddoCredentials === undefined) {
    res.send(true)
    return
  } else {
    if (authService === 'keycloak') {
      console.log('checking DDO from keycloak')
      const profile = await getProfile(res, credentials.value)
      console.log({ profile })
    } else if (authService === 'json') {
      console.log('Checking DDO from json')
    } else {
      console.log('Unrecognised authService')
    }
  }

  res.send(true)
}

export default assetController
