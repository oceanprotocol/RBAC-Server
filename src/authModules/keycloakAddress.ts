import { Response } from 'express'
import fetch from 'cross-fetch'
import checkAbilities from '../utils/checkAbilities'

export default async function keycloak(
  res: Response,
  address: string,
  eventType: string,
  component: string
): Promise<void> {
  // Request to keyclock auth service will take place here...
  const url = `${process.env.KEYCLOAK_ADDRESS_URL}/${address}`
  const responseStatus = await fetch(url, {
    method: 'GET',
    credentials: 'same-origin'
  }).then(
    function (response) {
      return response.status
    },
    function (error) {
      console.log(error.message)
      res.json(false)
    }
  )
  if (responseStatus === 200) {
  } else {
    res.json(false)
  }
}
