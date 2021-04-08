const adminAbility = require('../abilities/adminAbility');
const publisherAbility = require('../abilities/adminAbility');
const userAbility = require('../abilities/adminAbility');

function checkAbilities(role, eventType, component){
    switch(role){
        case "admin":
            console.log('can read Post', adminAbility.can('read', 'Post'));
            break;
        case "publisher":
            console.log('can read Post', publisherAbility.can('read', 'Post'));
            break;
        case "user":
            console.log('can read Post', userAbility.can('read', 'Post'));
            break;
    }
}

module.exports = checkAbilities;