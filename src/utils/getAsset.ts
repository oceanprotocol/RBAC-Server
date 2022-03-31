import { Asset, LoggerInstance } from '@oceanprotocol/lib'
import axios, { AxiosResponse } from 'axios'

export default async function getAsset(did: string): Promise<Asset> {
  try {
    const metadataCacheUri = process.env.METADATACACHE_URI
    const response: AxiosResponse<Asset> = await axios.get(
      `${metadataCacheUri}/api/aquarius/assets/ddo/${did}`
    )
    if (!response || response.status !== 200 || !response.data) return

    const data = { ...response.data } as Asset
    return data
  } catch (error) {
    if (axios.isCancel(error)) {
      LoggerInstance.log(error.message)
    } else {
      LoggerInstance.error(error.message)
    }
  }
}
