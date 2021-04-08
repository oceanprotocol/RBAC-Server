const adminAbility = require('../abilities/adminAbility');
const publisherAbility = require('../abilities/publisherAbility');
const userAbility = require('../abilities/userAbility');

function checkAbilities(role, eventType, component){
    let response;

    switch(role){
        case "admin":
            response = adminAbility.can(eventType, component);
            console.log('can read Post', response);
            return response;
        case "publisher":
            response = publisherAbility.can(eventType, component);
            console.log('can read Post', response);
            return response;
        case "user":
            response = userAbility.can(eventType, component);
            console.log('can read Post', response);
            return response;
    }
}

module.exports = checkAbilities;