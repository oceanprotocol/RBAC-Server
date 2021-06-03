import testRoles from '../data/testRoles.json'

interface userResponse {
  address: string
  id: string
  userRoles: string[]
}

export function returnUser(address: string): userResponse {
  for (let i = 0; i < testRoles.length; i++) {
    if (testRoles[i].address === address) {
      return testRoles[i]
    }
  }
}
