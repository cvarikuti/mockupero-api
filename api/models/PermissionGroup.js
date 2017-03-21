/**
 * PermissionGroup.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        name: {
            type: 'string',
            defaultsTo: 'Project Name'
        },
        description: {
            type: 'string',
            defaultsTo: ''
        },
        items: {
            collection: 'PermissionItem',
            via: 'group'
        }
    }
};
