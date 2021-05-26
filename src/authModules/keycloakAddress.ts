import { Response } from 'express'
import fetch from 'cross-fetch'
import checkAbilities from '../utils/checkAbilities'

export default async function address(
  res: Response,
  address: string,
  eventType: string,
  component: string
): Promise<void> {
  // Request to keyclock auth service will take place here...
  console.log('Address', address)
  const url = `${process.env.KEYCLOAK_ADDRESS_URL}/0x9Bf750b5465a51689fA4235aAc1F37EC692ef7b2` // ${address}`
  console.log('url', url)

  const response = await fetch(url, {
    method: 'GET'
  })
  const resJSON = await response.json()
  console.log('resJSON', resJSON)
}
