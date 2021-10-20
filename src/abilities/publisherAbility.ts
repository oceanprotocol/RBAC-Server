import { defineAbility } from '@casl/ability'

export default defineAbility((can) => {
  // Market
  can('browse', 'market')
  can('consume', 'market')
  can('compute', 'market')
  can('access', 'market')
  can('update', 'market')
  can('publish', 'market')
  can('delete', 'market')

  // Provider
  can('access', 'provider')
  can('consume', 'provider')
  can('compute', 'provider')
  can('encryptUrl', 'provider')
  can('initialize', 'provider')

  /// Metadatacache
  can('publish', 'metadatacache')
  can('update', 'metadatacache')
})
