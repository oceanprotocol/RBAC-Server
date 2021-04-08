const { defineAbility } = require('@casl/ability');

module.exports = defineAbility((can, cannot) => {
  can('publish', 'market');
  can('consume', 'market');
  can('consume', 'provider');
  can('delete', 'provider');
  can('delete', 'market');
});