import { Response } from 'express'
import { requestCredentials, profile } from '../@types/types'
import lodash from 'lodash'
import { Credentials } from '@oceanprotocol/lib'

async function authenticateProfile(
  res: Response,
  profile: profile,
  credentials: requestCredentials,
  ddoCredentials: Credentials
): Promise<void> {
  for (let i = 0; i < ddoCredentials.allow.length; i++) {
    const type = ddoCredentials.allow[i].type
    console.log('type', type)
    console.log('Profile type: ', profile[`${type}`])
    for (let j = 0; j < ddoCredentials.allow[i].values.length; j++) {
      console.log('j', j)
      const value = ddoCredentials.allow[i].values[j]
      console.log('value', value)

      if (type === 'address' && value === credentials.value) {
        console.log(true)
      } else if (value === profile[`${type}`]) {
        console.log(true)
      } else {
        console.log(false)
      }
    }
  }
}

export default authenticateProfile
