import { Response } from 'express'
import fetch from 'cross-fetch'
import checkAbilities from '../../utils/checkAbilities'
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
    // Respond flase if no users are found
    if (resJSON.length < 1) {
      res.json(false)
      return
    }
    let result = false
    // Looping through all users that are returned for the address
    for (let i = 0; i < resJSON.length; i++) {
      const roles: [string] = resJSON[i].userRoles
      // Looping through all the roles the user has
      for (let i = 0; i < roles.length; i++) {
        result = checkAbilities(roles[i], eventType, component)
        if (result === true) {
          break
        } else {
          continue
        }
      }
      if (result === true) {
        break
      }
    }
    res.json(result)
  } catch (error) {
    console.error('keycloak address Error:', error)
    res.json(false)
  }
}
