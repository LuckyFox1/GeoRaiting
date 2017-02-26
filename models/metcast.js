'use strict';

const mongoose = require('mongoose');

const Like = require('./like');

const metcast = new mongoose.Schema({
    images: String,
    name: String,
    url: String,
    rating: [{type: mongoose.Schema.Types.ObjectId, ref: 'Like'}]
});

let Metcast = mongoose.model('Metcast', metcast);

module.exports = Metcast;