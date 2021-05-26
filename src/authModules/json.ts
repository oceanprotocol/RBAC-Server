import { Response } from 'express'
import allow from '../data/allow.json'
import deny from '../data/deny.json'

export default function json(res: Response, address: string): void {
  let response = 'default'
  for (let i = 0; i < allow.length; i++) {
    if (allow[i] === address) {
      response = 'allow'
      break
    }
  }
  for (let i = 0; i < deny.length; i++) {
    if (deny[i] === address) {
      response = 'deny'
      break
    }
  }
  console.log('Permission response:', response)
  res.json(response)
}
