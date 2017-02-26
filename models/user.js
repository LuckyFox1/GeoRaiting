'use strict';

const mongoose = require('mongoose');

const Like = require('./like');

const user = new mongoose.Schema({
    fb_id: {
        type: String,
        unique: true
    },
    likes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Like'}]
});

let User = mongoose.model('User', user);

module.exports = User;