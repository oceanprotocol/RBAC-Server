import { Response } from 'express'
import testProviders from '../../data/testProviders.json'
const jsonData = process.env.JSON_PROFILE_DATA
  ? JSON.parse(process.env.JSON_PROFILE_DATA)
  : testProviders

export default async function jsonProviderAccess(
  res: Response,
  address: string,
  providerAddress: string
): Promise<boolean> {
  for (let i = 0; i < jsonData.length; i++) {
    if (jsonData[i].address === address) {
      for (let j = 0; j < jsonData[i].userProviders.length; j++) {
        if (jsonData[i].userProviders[j] === providerAddress) {
          return true
        }
      }
    }
  }
  // Respond false if no user profile can be found
  console.error('User not found or User does not have access')
  return false
}
