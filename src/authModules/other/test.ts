import { Response } from 'express'
import { checkRole } from '../../utils/checkRole'
import checkAbilities from '../../utils/checkAbilities'
import { requestCredentials } from '../../@types/types'

export default function test(
  res: Response,
  credentials: requestCredentials,
  eventType: string,
  component: string
): void {
  const role = checkRole(credentials.type, credentials.value)
  const response = checkAbilities(role, eventType, component)
  res.json(response)
}
