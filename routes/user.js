'use strict';

const express = require('express');
const md5 = require('md5');
const User = require('../models/user');

const postUser = require('../middleware/postForUser');
const postUserFb = require('../middleware/postForUserFb');

const router = express.Router();

router.get('/user/:fbId', (req, res, next) => {
    User.find({fb_id: req.params.fbId}).populate('likes')
        .then(user => {
            res.json({user});
        })
        .catch(next);
});

router.get('/user', (req, res, next) => {
    User.find({fb_id: req.params.fbId}).populate('likes')
        .then(user => {
            res.json({user});
        })
        .catch(next);
});

router.post('/user/:fbId', postUserFb, (req, res, next) => {
    User.find({fb_id: req.params.fbId})
        .then(user => {
            if (user.length === 0) {
                new User(req.body.user)
                    .save()
                    .then(user => {
                        res.json({user});
                    })
                    .catch(next);
            } else {
                res.json({user});
            }
        })
        .catch(next);
});

router.post('/register', postUser, (req, res, next) => {
    User.find({ name: req.body.user.name })
        .then(user => {
            if (user.length === 0) {
                new User({ name: req.body.user.name, password: md5(req.body.user.password), roles: ['user'] })
                    .save()
                    .then(user => {
                        res.json({user});
                    })
                    .catch(next);
            } else {
                res.json({ message: 'User with the same name already exists.' });
            }
        })
        .catch(next);
});

router.post('/login', (req, res, next) => {
    User.findOne({name: req.body.user.name, password: md5(req.body.user.password)}).populate('likes')
        .then(user => {
            res.json({user});
        })
        .catch(next);
});

router.put('/user/:fbId', (req, res, next) => {
    User.findOneAndUpdate({fb_id: req.params.fbId}, {$set: {fb_id: req.params.fbId}}, req.body.user)
        .then(user => {
            res.json({
                user: Object.assign(user.toObject(), req.body.user)
            });
        })
        .catch(next);
});

router.delete('/user/:fbId', (req, res, next) => {
    User.remove({fb_id: req.params.fbId})
        .then(() => {
            res.json({message: 'User delete!'});
        })
        .catch(next);
});

module.exports = router;