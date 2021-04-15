"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ability_1 = require("@casl/ability");
module.exports = ability_1.defineAbility(function (can, cannot) {
    can('publish', 'market');
    can('consume', 'market');
    can('consume', 'provider');
    cannot('delete', 'provider');
    cannot('delete', 'market');
});
//# sourceMappingURL=publisherAbility.js.map