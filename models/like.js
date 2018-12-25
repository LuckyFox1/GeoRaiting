'use strict';

const mongoose = require('mongoose');
mongoose.plugin(schema => { schema.options.usePushEach = true });

const Metcast = require('./metcast'),
    User = require('./user');

const like = mongoose.Schema({
    isPositive: Number,
    metcast_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Metcast'},
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

let Like = mongoose.model('Like', like);

module.exports = Like;