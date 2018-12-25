'use strict';

const mongoose = require('mongoose');
mongoose.plugin(schema => { schema.options.usePushEach = true });

const Like = require('./like');

const user = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    password: String,
    roles: [String],
    likes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Like'}]
});

let User = mongoose.model('User', user);

module.exports = User;