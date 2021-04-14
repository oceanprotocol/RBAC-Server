import { defineAbility } from '@casl/ability';

module.exports = defineAbility((can, cannot) => {
  can('publish', 'market');
  can('consume', 'market');
  can('consume', 'provider');
  cannot('delete', 'provider');
  cannot('delete', 'market');
});