import testRoles from '../data/testRoles.json'

interface userResponse {
  address: string
  id: string
  userRoles: string[]
}

export default function returnUser(address: string): [userResponse] {
  let response: [userResponse]
  for (let i = 0; i < testRoles.length; i++) {
    if (testRoles[i].address === address) {
      response.push(testRoles[i])
    }
  }
  return response
}
