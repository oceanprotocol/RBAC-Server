import { Response } from 'express'
import { credentials, profile, ddoCredentials } from '../@types/types'

async function authenticateProfile(
  res: Response,
  profile: profile,
  credentials: credentials,
  ddoCredentials: ddoCredentials
): Promise<void> {
  res.send(true)
}

export default authenticateProfile
