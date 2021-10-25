import { Response } from 'express'
import testProfiles from '../data/testProfiles.json'
const jsonData = process.env.JSON_PROFILE_DATA
  ? JSON.parse(process.env.JSON_PROFILE_DATA)
  : testProfiles

export default async function getProfileJson(
  res: Response,
  address: string
): Promise<any> {
  for (let i = 0; i < jsonData.length; i++) {
    if (jsonData[i].address === address) {
      return jsonData[i]
    }
  }
  // Respond false if no user profile can be found
  console.error('User profile not found')
  res.send(false)
}
