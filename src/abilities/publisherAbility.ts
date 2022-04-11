import { defineAbility } from '@casl/ability'

export default defineAbility((can, cannot) => {
  // Market
  can('browse', 'market')
  can('access', 'market')
  can('update', 'market')
  can('publish', 'market')
  can('delete', 'market')
  cannot('consume', 'market')
  cannot('compute', 'market')

  // Provider
  can('access', 'provider')
  can('encryptUrl', 'provider')
  cannot('consume', 'provider')
  cannot('compute', 'provider')
  cannot('initialize', 'provider')

  /// Metadatacache
  can('publish', 'metadatacache')
  can('update', 'metadatacache')
})
