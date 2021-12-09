import { Response } from 'express'
import fetch from 'cross-fetch'

export default async function apiProviderAccess(
  res: Response,
  walletAddress: string,
  providerAddress: string
): Promise<boolean> {
  try {
    const data = { walletAddress, providerAddress }
    const url = `${process.env.API_PROVIDER_CHECK}`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const resJSON = await response.json()
    return resJSON
  } catch (error) {
    // Respond false if no user profile can be found
    console.error(error)
    return false
  }
}
