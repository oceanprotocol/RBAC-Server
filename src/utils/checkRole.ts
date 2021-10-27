import users from '../data/users'

export function checkRole(type: string, token: string): string {
  // Checking role from user test data
  for (let i = 0; i < users.length; i++) {
    if (users[i].authType === type && users[i].auth === token) {
      return users[i].role
    }
  }
}
