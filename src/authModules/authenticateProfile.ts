import { Response } from 'express'
import { requestCredentials } from '../@types/types'
import { Credentials, Credential } from '@oceanprotocol/lib'

async function checkCredentials(
  credentialArray: Credential[],
  profile: any,
  credentials: requestCredentials,
  skippedCheckResult = true
): Promise<boolean> {
  try {
    if (credentialArray === undefined || credentialArray.length === 0) {
      return skippedCheckResult
    } else {
      for (let i = 0; i < credentialArray.length; i++) {
        const type = credentialArray[i].type
        for (let j = 0; j < credentialArray[i].values.length; j++) {
          const value = credentialArray[i].values[j]

          if (
            type === 'address' &&
            value.toLowerCase() === credentials.value.toLowerCase()
          ) {
            return true
          } else if (value === profile[`${type}`]) {
            return true
          }
        }
      }
      return false
    }
  } catch (error) {
    console.error(error)
  }
}

async function authenticateProfile(
  res: Response,
  profile: any,
  credentials: requestCredentials,
  ddoCredentials: Credentials
): Promise<boolean> {
  try {
    const isAllowed = await checkCredentials(
      ddoCredentials.allow,
      profile,
      credentials
    )
    const isDenied = await checkCredentials(
      ddoCredentials.deny,
      profile,
      credentials,
      false
    )

    if (isAllowed === false || isDenied === true) {
      return false
    } else {
      return true
    }
  } catch (error) {
    console.error(error)
    res.send(false)
    return
  }
}

export default authenticateProfile
