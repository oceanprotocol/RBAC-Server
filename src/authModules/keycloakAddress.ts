import { Response } from 'express'
import fetch from 'cross-fetch'
import checkAbilities from '../utils/checkAbilities'
interface keycloakResponse {
  id: string
  userRoles: [string]
}
interface resJSON {
  keycloakResponse: [keycloakResponse]
}

export default async function address(
  res: Response,
  address: string,
  eventType: string,
  component: string
): Promise<void> {
  // Request to keyclock auth service will take place here...
  try {
    const url = `${process.env.KEYCLOAK_ADDRESS_URL}/${address}`
    const response = await fetch(url, {
      method: 'GET'
    })
    const resJSON: resJSON = await response.json()
    const roles = resJSON[0].userRoles
    let result = false
    for (let i = 0; i < roles.length; i++) {
      result = checkAbilities(roles[i], eventType, component)
      console.log('result', result)
      if (result === true) {
        break
      } else {
        continue
      }
    }
    res.json(result)
  } catch (error) {
    console.error(error)
    res.json(false)
  }
}
