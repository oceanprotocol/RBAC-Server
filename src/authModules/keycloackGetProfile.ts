import { Response } from 'express'
import fetch from 'cross-fetch'
import { profile } from '../@types/types'

export default async function getProfile(
  res: Response,
  address: string
): Promise<profile> {
  try {
    const url = `${process.env.KEYCLOAK_PROFILE_URL}/${address}`
    const response = await fetch(url, {
      method: 'POST'
    })
    const resJSON: profile = await response.json()
    return resJSON
  } catch (error) {
    // Respond false if no user profile can be found
    console.error(error)
    res.json(false)
  }
}
