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
  const url = `${process.env.KEYCLOAK_ADDRESS_URL}/${address}`
  console.log('url', url)
  try {
    await fetch(url, {
      method: 'GET',
      credentials: 'same-origin'
    }).then(
      function (response) {
        console.log('Response', response)
        if (response.status === 200) {
          console.log('200 response', response)
          console.log('json response', response.body)
        } else {
          res.json(false)
        }
      },
      function (error) {
        console.log(error.message)
        res.json(false)
      }
    )
  } catch (error) {
    console.log('error')
  }
}
