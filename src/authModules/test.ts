import { Response } from 'express'
import { checkRole } from '../utils/checkRole'
import checkAbilities from '../utils/checkAbilities'

interface Credentials {
  type: string
  token: string
}

export default function test(
  res: Response,
  credentials: Credentials,
  eventType: string,
  component: string
): void {
  const role = checkRole(credentials.type, credentials.token)
  console.log('role:', role)
  const response = checkAbilities(role, eventType, component)
  console.log('Permission response:', response)
  res.json(response)
}
