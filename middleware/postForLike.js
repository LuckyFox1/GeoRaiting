'use strict';

const validator = require('../validator/postLikeValidator');

module.exports = (req, res, next) => {
    if(!validator(req.body))
    {
        next(new Error("400 Bad Request."));
    }
    next();
};