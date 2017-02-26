'use strict';

const validator = require('../validator/putMetcastValidator');

module.exports = (req, res, next) => {
    if(!validator(req.body))
    {
        next(new Error("400 Bad Request."));
    }
    next();
};
