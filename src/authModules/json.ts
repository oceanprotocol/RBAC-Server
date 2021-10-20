import { Response } from 'express'
import returnUser from '../utils/filterJson'
import checkAbilities from '../utils/checkAbilities'
interface jsonResponse {
  address: string
  id: string
  userRoles: string[]
}

export default async function address(
  res: Response,
  address: string,
  eventType: string,
  component: string
): Promise<void> {
  try {
    const resJSON: jsonResponse[] = returnUser(address)
    // Respond false if no users are found
    if (resJSON.length < 1) {
      res.json(false)
      return
    }
    let result = false
    // Looping through all users that are returned for the address
    for (let i = 0; i < resJSON.length; i++) {
      const roles: string[] = resJSON[i].userRoles
      // Looping through all the roles the user has
      for (let j = 0; j < roles.length; j++) {
        result = checkAbilities(roles[j], eventType, component)
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
    console.error(error)
    res.json(false)
  }
}
