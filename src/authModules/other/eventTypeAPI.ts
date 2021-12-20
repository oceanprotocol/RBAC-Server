import fetch from 'cross-fetch'
import { reqBody } from '../../@types/types'

function setURL(eventType: string): string {
  switch (eventType) {
    case 'browse':
      return `${process.env.EVENT_TYPE_API_BROWSE}`
    case 'consume':
      return `${process.env.EVENT_TYPE_API_CONSUME}`
    case 'compute':
      return `${process.env.EVENT_TYPE_API_COMPUTE}`
    case 'access':
      return `${process.env.EVENT_TYPE_API_ACCESS}`
    case 'update':
      return `${process.env.EVENT_TYPE_API_UPDATE}`
    case 'publish':
      return `${process.env.EVENT_TYPE_API_PUBLISH}`
    case 'delete':
      return `${process.env.EVENT_TYPE_API_DELETE}`
    case 'encryptUrl':
      return `${process.env.EVENT_TYPE_API_ENCRYPT_URL}`
    case 'initialize':
      return `${process.env.EVENT_TYPE_API_INITIALIZE}`
    default:
      break
  }
}

export default async function eventTypeAPI(body: reqBody): Promise<boolean> {
  const url = setURL(body.eventType)
  // If eventType API URL has not been defined as an env immediately return true
  if (url === (undefined || '')) return true
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    const resJSON = await response.json()
    return resJSON
  } catch (error) {
    // Respond false if no user profile can be found
    console.error(error)
    return false
  }
}
