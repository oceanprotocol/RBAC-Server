import { defineAbility } from '@casl/ability'

export default defineAbility((can, cannot) => {
  // Market
  can('browse', 'market')
  can('consume', 'market')
  can('compute', 'market')
  can('access', 'market')
  cannot('update', 'market')
  cannot('publish', 'market')
  cannot('delete', 'market')

  // Provider
  can('access', 'provider')
  can('consume', 'provider')
  can('compute', 'provider')
  cannot('encryptUrl', 'provider')
  cannot('initialize', 'provider')

  /// Metadatacache
  cannot('publish', 'metadatacache')
  cannot('update', 'metadatacache')
})
