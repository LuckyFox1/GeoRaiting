'use strict';

let ajv = require('ajv');
ajv = new ajv();
let validator = {};

validator.postMetcast = ajv.compile({
    $schema:"http://json-schema.org/draft-04/schema#",
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
validator.putMetcast = ajv.compile({
    $schema:"http://json-schema.org/draft-04/schema#",
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
            }
        }
    },
    required:[
        "metcast"
    ]
});
validator.postUser = ajv.compile({
    $schema:"http://json-schema.org/draft-04/schema#",
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
validator.postLike = ajv.compile({
    $schema:"http://json-schema.org/draft-04/schema#",
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
validator.putLike = ajv.compile({
    $schema:"http://json-schema.org/draft-04/schema#",
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

module.exports = validator;