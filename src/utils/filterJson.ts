import testData from '../data/testRoles.json'
const jsonData = process.env.JSON_DATA
  ? JSON.parse(process.env.JSON_DATA)
  : testData
interface userResponse {
  address: string
  id: string
  userRoles: string[]
}

export default function returnUser(address: string): userResponse[] {
  const response: userResponse[] = []
  for (let i = 0; i < jsonData.length; i++) {
    if (jsonData[i].address === address) {
      response.push(jsonData[i])
    }
  }
  return response
}
