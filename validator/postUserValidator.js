'use strict';

let ajv = new require('ajv')();

module.exports = ajv.compile({
    type: "object",
    properties:{
        user:{
            type:"object",
            properties: {
                name: {
                    type:"string"
                },
                password: {
                    type:"string"
                }
            },
            required:[
                "name",
                "password"
            ]
        }
    },
    required:[
        "user"
    ]
});