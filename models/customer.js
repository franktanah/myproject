var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('customer', {
    "description": "customer data model",
    "connector": "memory",
    "fields": {
        "customer_name": {
            "type": "string",
            "required": true
        },
        "customer_email": {
            "type": "string",
            "required": true
        }
    },
    "actions": [
        "create",
        "read",
        "update",
        "delete",
        "deleteAll"
    ]
});
module.exports = Model;