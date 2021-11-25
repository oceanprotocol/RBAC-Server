import { Response } from 'express'
import fetch from 'cross-fetch'

export default async function getProfile(
  res: Response,
  address: string
): Promise<boolean | void> {
  try {
    const url = `${process.env.API_PROVIDER_CHECK}/${address}`
    const response = await fetch(url, {
      method: 'POST'
    })
    const resJSON = await response.json()
    return resJSON
  } catch (error) {
    // Respond false if no user profile can be found
    console.error(error)
    res.json(false)
  }
}
