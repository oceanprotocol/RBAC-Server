import testProfiles from '../data/testProfiles.json'
import { profile } from '../@types/types'
const jsonData = process.env.JSON_PROFILE_DATA
  ? JSON.parse(process.env.JSON_PROFILE_DATA)
  : testProfiles

export default async function getProfileJson(
  address: string
): Promise<profile> {
  for (let i = 0; i < jsonData.length; i++) {
    if (jsonData[i].address === address) {
      return jsonData[i]
    }
  }
}
