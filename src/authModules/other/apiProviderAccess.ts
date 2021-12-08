import { Response } from 'express'
import fetch from 'cross-fetch'

export default async function getProfile(
  res: Response,
  address: string,
  providerAddress: string
): Promise<boolean> {
  try {
    const walletAddress = '0xB149C36986cf8e2B260d2Eb02AFf97058a1a5C95'
    const providerAddress = '0xf31FC0D18A24c6Ae4225A0d4eEB709AC0a18E993'
    const data = { walletAddress, providerAddress }
    const url = `${process.env.API_PROVIDER_CHECK}`
    console.log('Requesting from URL:', url)
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const resJSON = await response.json()
    console.log('resJSON', resJSON)
    return resJSON
  } catch (error) {
    // Respond false if no user profile can be found
    console.error(error)
    return false
  }
}
