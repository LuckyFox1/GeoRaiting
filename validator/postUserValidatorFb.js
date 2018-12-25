'use strict';

let ajv = new require('ajv')();

module.exports = ajv.compile({
    type: "object",
    properties:{
        user:{
            type:"object",
            properties:{
                fb_id:{
                    type:"string"
                }
            },
            required:[
                "fb_id"
            ]
        }
    },
    required:[
        "user"
    ]
});