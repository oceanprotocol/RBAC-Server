import users from '../data/users'

export function checkRole(type: string, token: string): string {
  console.log('type:', type)
  console.log('Token:', token)
  for (let i = 0; i < users.length; i++) {
    if (users[i].authType === type && users[i].auth === token) {
      return users[i].role
    }
  }
}
