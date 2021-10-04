import { Response } from 'express'
import { checkRole } from '../utils/checkRole'
import checkAbilities from '../utils/checkAbilities'
import { credentials } from '../@types/types'

export default function test(
  res: Response,
  credentials: credentials,
  eventType: string,
  component: string
): void {
  const role = checkRole(credentials.type, credentials.value)
  console.log('role:', role)
  const response = checkAbilities(role, eventType, component)
  console.log('Permission response:', response)
  res.json(response)
}
