import { Response } from 'express'
import roleController from './roleController'
import getDDO from '../utils/getDDO'
import getProfile from '../authModules/keycloak/keycloackGetProfile'
import getProfileJson from '../authModules/json/jsonGetProfile'
import authenticateProfile from '../authModules/authenticateProfile'
import { requestCredentials } from '../@types/types'
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
  // Request DDO from aquarius
  const ddo = await getDDO(did)
  // Immediately send true response if request is from asset owner
  if (!ddo) {
    console.error('Cannot retrieve DDO')
    res.send(false)
    return
  }
  if (ddo.publicKey[0].owner === credentials.value) {
    profileAllowed = true
  } else {
    const ddoCredentials: Credentials = ddo.credentials
    let userProfile: any
    if (ddoCredentials === undefined) {
      // Profile is default allowed if no allow or deny list exists.
      profileAllowed = true
    } else {
      if (authService === 'keycloak') {
        // Requesting user profile from Keycloak
        userProfile = await getProfile(res, credentials.value)
      } else if (authService === 'json') {
        // Requesting user profile from json env or file
        userProfile = await getProfileJson(res, credentials.value)
      } else {
        console.error('Unrecognised authService')
        res.send(false)
        return
      }
      if (!userProfile) {
        console.log('Process terminated as no user profile found')
        return
      }
      profileAllowed = await authenticateProfile(
        res,
        userProfile,
        credentials,
        ddoCredentials
      )
    }
  }

  if (profileAllowed === true) {
    roleController(res, eventType, component, authService, credentials)
  } else {
    console.log('Profile is not allowed')
    res.send(false)
  }
}

export default assetController
