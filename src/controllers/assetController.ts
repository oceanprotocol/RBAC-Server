import { Request, Response } from 'express'
import roleController from './roleController'
import getDDO from '../utils/getDDO'
import getProfile from '../authModules/keycloackGetProfile'
import authenticateProfile from '../authModules/authenticateProfile'
import { requestCredentials } from '../@types/types'
import { Credentials } from '@oceanprotocol/lib'

async function assetController(
  res: Response,
  did: string,
  authService: string,
  credentials: requestCredentials
): Promise<void> {
  console.log('Request DDO from aquarius')
  const ddo = await getDDO(did)
  const ddoCredentials: Credentials = ddo.credentials
  console.log({ ddoCredentials })
  if (ddoCredentials === undefined) {
    res.send(true)
    return
  } else {
    if (authService === 'keycloak') {
      console.log('checking DDO from keycloak')
      const userProfile = await getProfile(res, credentials.value)
      console.log({ userProfile })
      authenticateProfile(res, userProfile, credentials, ddoCredentials)
    } else if (authService === 'json') {
      console.log('Checking DDO from json')
    } else {
      console.log('Unrecognised authService')
    }
  }
}

export default assetController
