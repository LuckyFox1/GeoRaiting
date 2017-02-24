'use strict';

const mongoose = require('mongoose');

const metcast = new mongoose.Schema({
    images: String,
    name: String,
    url: String,
    rating: [{type: mongoose.Schema.Types.ObjectId, ref: 'Like'}]
});

const user = new mongoose.Schema({
    fb_id: {
        type: String,
        unique: true
    },
    likes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Like'}]
});

const like = mongoose.Schema({
    isPositive: Number,
    metcast_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Metcast'},
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

let Metcast = mongoose.model('Metcast', metcast);
let Like = mongoose.model('Like', like);
let User = mongoose.model('User', user);

module.exports = {Like, Metcast, User};