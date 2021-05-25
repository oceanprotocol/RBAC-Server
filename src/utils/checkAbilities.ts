import adminAbility from '../abilities/adminAbility'
import publisherAbility from '../abilities/publisherAbility'
import consumerAbility from '../abilities/consumerAbility'
import userAbility from '../abilities/userAbility'

export default function checkAbilities(
  role: string,
  eventType: string,
  component: string
): boolean {
  let response: boolean

  switch (role) {
    case 'admin':
      response = adminAbility.can(eventType, component)
      return response
    case 'publisher':
      response = publisherAbility.can(eventType, component)
      return response
    case 'consumer':
      response = consumerAbility.can(eventType, component)
      return response
    case 'user':
      response = userAbility.can(eventType, component)
      return response
    default:
      response = false
      return response
  }
}
