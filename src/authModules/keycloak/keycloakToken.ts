import { Response } from 'express'
import fetch from 'cross-fetch'
import jwt_decode from 'jwt-decode'
import checkAbilities from '../../utils/checkAbilities'

interface decodedToken {
  exp?: number
  iat?: number
  jti?: string
  iss?: string
  aud?: string[] | string
  sub?: string
  nbf?: number
  typ?: string
  azp?: string
  session_state?: string
  acr?: string
  realm_access?: { roles?: string[] | string }
  resource_access?: { account?: { roles?: string[] | string } }
  scope?: string
  email_verified?: boolean
  name?: string
  preferred_username?: string
  given_name?: string
  family_name?: string
  email?: string
}

export default async function keycloak(
  res: Response,
  token: string,
  eventType: string,
  component: string
): Promise<void> {
  const request = `Bearer ${token}`
  // Request to keyclock auth service will take place here...
  const url = process.env.KEYCLOAK_URL

  const responseStatus = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: request
    },
    credentials: 'same-origin'
  }).then(
    function (response) {
      return response.status
    },
    function (error) {
      console.error('Keycloak responseStatus', error.message)
      res.json(false)
    }
  )
  if (responseStatus === 200) {
    const decodedToken: decodedToken = jwt_decode(token)
    const role = decodedToken.realm_access.roles
    let response: boolean
    for (let i = 0; i < role.length; i++) {
      response = checkAbilities(role[i], eventType, component)
      if (response === true) {
        break
      } else {
        continue
      }
    }
    res.json(response)
  } else {
    res.json(false)
  }
}
