export interface credentials {
  type: string
  value: string
}
export interface profile {
  domain: string
  email: string
  userRoles: [string]
}
export interface ddoCredentials {
  deny?: {
    type: string
    values: string
  }
  allow?: {
    type: string
    values: string
  }
}
