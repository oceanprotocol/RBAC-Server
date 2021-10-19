import { Request, Response } from 'express'
import roleController from './roleController'
import getDDO from '../utils/getDDO'
import getProfile from '../authModules/keycloackGetProfile'
import getProfileJson from '../authModules/jsonGetProfile'
import authenticateProfile from '../authModules/authenticateProfile'
import { requestCredentials, profile } from '../@types/types'
import { Credentials } from '@oceanprotocol/lib'

async function assetController(
  res: Response,
  eventType: string,
  component: string,
  did: string,
  authService: string,
  credentials: requestCredentials
): Promise<void> {
  let profileAllowed: boolean
  console.log('Request DDO from aquarius')
  const ddo = await getDDO(did)
  const ddoCredentials: Credentials = ddo.credentials
  console.log({ ddoCredentials })
  let userProfile: profile
  if (ddoCredentials === undefined) {
    profileAllowed = true
  } else {
    if (authService === 'keycloak') {
      console.log('checking DDO from keycloak')
      userProfile = await getProfile(res, credentials.value)
      console.log({ userProfile })
    } else if (authService === 'json') {
      console.log('Checking DDO from json')
      userProfile = await getProfileJson(credentials.value)
      console.log({ userProfile })
    } else {
      console.log('Unrecognised authService')
      res.send(false)
    }
    profileAllowed = await authenticateProfile(
      res,
      userProfile,
      credentials,
      ddoCredentials
    )
  }
  if (profileAllowed === true) {
    roleController(res, eventType, component, authService, credentials)
  } else {
    res.send(false)
  }
}

export default assetController
