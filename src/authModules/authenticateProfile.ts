import { Response } from 'express'
import { requestCredentials, profile } from '../@types/types'
import { Credentials, Credential } from '@oceanprotocol/lib'

async function checkCredentials(
  credentialArray: Credential[],
  profile: profile,
  credentials: requestCredentials
): Promise<boolean> {
  for (let i = 0; i < credentialArray.length; i++) {
    const type = credentialArray[i].type
    console.log('type', type)
    console.log('Profile type: ', profile[`${type}`])
    for (let j = 0; j < credentialArray[i].values.length; j++) {
      console.log('j', j)
      const value = credentialArray[i].values[j]
      console.log('value', value)

      if (type === 'address' && value === credentials.value) {
        console.log(true)
        return true
      } else if (value === profile[`${type}`]) {
        console.log(true)
        return true
      }
    }
  }
  return false
}

async function authenticateProfile(
  res: Response,
  profile: profile,
  credentials: requestCredentials,
  ddoCredentials: Credentials
): Promise<boolean> {
  let isAllowed
  if (ddoCredentials.allow === undefined || ddoCredentials.allow.length === 0) {
    isAllowed = true
  } else {
    isAllowed = await checkCredentials(
      ddoCredentials.allow,
      profile,
      credentials
    )
  }
  const isDenied = await checkCredentials(
    ddoCredentials.deny,
    profile,
    credentials
  )
  if (isAllowed === false || isDenied === true) {
    return false
  } else {
    return true
  }
}

export default authenticateProfile
