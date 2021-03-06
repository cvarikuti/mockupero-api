/**
 * PermissionItem.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        name: {
            type: 'string'
        },
        action: {
            type: 'string'
        },
        model: {
            type: 'string'
        },
        description: {
            type: 'string',
            defaultsTo: ''
        },
        group: {
            collection: 'PermissionGroup',
            via: 'items'
        }
    }
};
