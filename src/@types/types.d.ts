export interface requestCredentials {
  type: string
  value: string
}
export interface reqBody {
  eventType: string
  component: string
  authService?: string
  did?: string
  providerAddress?: string
  credentials: {
    type: string
    value: string
  }
}
