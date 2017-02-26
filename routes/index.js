'use strict';

module.exports = function (app) {
    app.use(require('./metcast'));
    app.use(require('./user'));
    app.use(require('./like'));
};