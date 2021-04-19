import { defineAbility } from '@casl/ability';

module.exports = defineAbility((can, cannot) => {
  can('consume', 'market');
  can('consume', 'provider');
  cannot('publish', 'market');
  cannot('delete', 'provider');
  cannot('delete', 'market');
});