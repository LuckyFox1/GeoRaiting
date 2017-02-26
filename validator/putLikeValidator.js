'use strict';

let ajv = new require('ajv')();

module.exports = ajv.compile({
    type: "object",
    properties:{
        like:{
            type:"object",
            properties:{
                isPositive:{
                    type:"integer"
                }

            },
            required:[
                "isPositive"
            ]
        }
    },
    required:[
        "like"
    ]
});