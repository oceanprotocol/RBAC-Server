import { Response } from 'express'
import fetch from 'cross-fetch'
import checkAbilities from '../utils/checkAbilities'
interface keycloakResponse {
  id: string
  userRoles: [string]
}

export default async function address(
  res: Response,
  address: string,
  eventType: string,
  component: string
): Promise<void> {
  try {
    const url = `${process.env.KEYCLOAK_ADDRESS_URL}/${address}`
    const response = await fetch(url, {
      method: 'GET'
    })
    const resJSON: [keycloakResponse] = await response.json()
    // Looping through all users that are returned for the address
    for (let i = 0; i < resJSON.length; i++) {
      const roles: [string] = resJSON[i].userRoles
      let result = false
      // Looping through all the roles the user has
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
    }
  } catch (error) {
    console.error(error)
    res.json(false)
  }
}
