import { Response } from 'express'
import fetch from 'cross-fetch'
import checkAbilities from '../utils/checkAbilities'

interface keycloakProfileResponse {
  domain: string
  email: string
  roles: [string]
}

export default async function getProfile(
  res: Response,
  address: string
): Promise<keycloakProfileResponse> {
  try {
    const url = `${process.env.KEYCLOAK_PROFILE_URL}/${address}`
    const response = await fetch(url, {
      method: 'POST'
    })
    const resJSON: keycloakProfileResponse = await response.json()
    return resJSON
  } catch (error) {
    console.error(error)
    res.json(false)
  }
}
