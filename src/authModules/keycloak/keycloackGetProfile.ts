import { Response } from 'express'
import fetch from 'cross-fetch'

export default async function getProfile(
  res: Response,
  address: string
): Promise<any> {
  try {
    const url = `${process.env.KEYCLOAK_PROFILE_URL}/${address}`
    const response = await fetch(url, {
      method: 'POST'
    })
    const resJSON = await response.json()
    return resJSON
  } catch (error) {
    // Respond false if no user profile can be found
    console.error('keycloak getProfile Error:', error)
    res.json(false)
  }
}
