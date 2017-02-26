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
                },
                metcast_id:{
                    type:"string"
                },
                user_id:{
                    type:"string"
                }

            },
            required:[
                "isPositive",
                "metcast_id",
                "user_id"
            ]
        }
    },
    required:[
        "like"
    ]
});