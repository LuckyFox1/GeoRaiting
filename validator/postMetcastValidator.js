'use strict';

let ajv = new require('ajv')();

module.exports = ajv.compile({
    type: "object",
    properties:{
        metcast:{
            type:"object",
            properties:{
                images:{
                    type:"string"
                },
                name:{
                    type:"string"
                },
                url:{
                    type:"string"
                }
            },
            required:[
                "images",
                "name",
                "url"
            ]
        }
    },
    required:[
        "metcast"
    ]
});