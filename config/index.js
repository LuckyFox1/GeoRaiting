'use strict';

const host = process.env.HOST;

module.exports = {
    port: 3000,
    ip: host,
    mongoUrl: `mongodb://${host}/georating`
};