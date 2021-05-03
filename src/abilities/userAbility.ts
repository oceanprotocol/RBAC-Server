import { defineAbility } from '@casl/ability';

module.exports = defineAbility((can, cannot) => {
  // Market
  can('browse', 'market');
  cannot('access', 'market');
  cannot('update', 'market');
  cannot('compute', 'market');
  cannot('consume', 'market');
  cannot('publish', 'market');
  cannot('delete', 'market');

  // Provider
  cannot('encryptUrl', 'provider');
  cannot('initialize', 'provider');
  cannot('access', 'provider');
  cannot('compute', 'provider');

  /// Metadatacache
  cannot('publish', 'metadatacache');
  cannot('update', 'metadatacache');
});