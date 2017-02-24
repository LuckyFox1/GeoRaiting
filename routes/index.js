'use strict';

const express = require('express');
const validator = require('../validator');

const Like = require('../models/index').Like,
    Metcast = require('../models/index').Metcast,
    User = require('../models/index').User;


const router = express.Router();

router.get('/', (req, res, next) => {
    Metcast.find({})
        .then(metcasts => {
            metcasts = JSON.parse(JSON.stringify(metcasts));

            for(let i = 0; i < metcasts.length; i++) {
                metcasts[i].rating = metcasts[i].rating.length;
            }
            res.json({metcasts});
        })
        .catch(next);
});

//Validation: validator.postMetcast
router.post('/', (req, res, next) => {
    if(!validator.postMetcast(req.body)) {
        res.status(400).json({ error: "400 Bad Request." });
        return;
    }

    if (req.header('Authorization') === process.env.SECRET) {
        new Metcast(req.body.metcast)
            .save()
            .then(metcast => {
                res.json({metcast});
            })
            .catch(next);
    } else {
        res.send('Wrong authorization key');
    }
});

//Validation: validator.putMetcast
router.put('/:metcastId', (req, res, next) => {
    if(!validator.putMetcast(req.body)) {
        res.status(400).json({ error: "400 Bad Request." });
        return;
    }

    if (req.header('Authorization') === process.env.SECRET) {
        Metcast.findOneAndUpdate({_id: req.params.metcastId}, req.body.metcast)
            .then(metcast => {
                res.json({
                    metcast: Object.assign(metcast.toObject(), req.body.metcast)
                });
            })
            .catch(next);
    } else {
        res.send('Wrong authorization key');
    }
});

router.delete('/:metcastId', (req, res, next) => {
    if (req.header('Authorization') === process.env.SECRET) {
        Metcast.remove({_id: req.params.metcastId})
            .then(() => {
                res.json({message: 'Metcast delete!'});
            })
            .catch(next);
    } else {
        res.send('Wrong authorization key');
    }
});

router.get('/user/:fbId', (req, res, next) => {
    User.find({fb_id: req.params.fbId}).populate('likes')
        .then(user => {
            res.json({user});
        })
        .catch(next);
});

//Validation: validator.postUser
router.post('/user/:fbId', (req, res, next) => {
    if(!validator.postUser(req.body)) {
        res.status(400).json({ error: "400 Bad Request." });
        return;
    }

    User.find({fb_id: req.params.fbId})
        .then(user => {
            if(user.length === 0) {
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

router.get('/like/metcast/:metcastId', (req, res, next) => {
    Like.find({metcast_id: req.params.metcastId}).populate('metcast_id')
        .then(like => {
            res.json({like});
        })
        .catch(next);
});

router.get('/like/user/:userId', (req, res, next) => {
    Like.find({user_id: req.params.userId}).populate('user_id')
        .then(like => {
            res.json({like});
        })
        .catch(next);
});

//Validation: validator.postLike
router.post('/like', (req, res, next) => {
    if(!validator.postLike(req.body)) {
        res.status(400).json({ error: "400 Bad Request." });
        return;
    }

    new Like(req.body.like)
        .save()
        .then(like => {
            Metcast
                .findOne({ _id: like.metcast_id  })
                .then( metcast => {
                    metcast.rating.push(like._id);
                    metcast
                        .save()
                        .catch(next);
                }).catch(next);

            User
                .findOne({ _id: like.user_id  })
                .then( user => {
                    user.likes.push(like._id);
                    user
                        .save()
                        .catch(next);
                }).catch(next);
            res.json({like});
        })
        .catch(next);
});

//Validation: validator.putLike
router.put('/like/:likeId', (req, res, next) => {
    if(!validator.putLike(req.body)) {
        res.status(400).json({ error: "400 Bad Request." });
        return;
    }

    Like.findOneAndUpdate({_id: req.params.likeId}, req.body.like)
        .then(like => {
            res.json({
                like: Object.assign(like.toObject(), req.body.like)
            });
        })
        .catch(next);
});

router.delete('/like/:likeId', (req, res, next) => {
    Like.remove({_id: req.params.likeId})
        .then(() => {
            res.json({message: 'Like delete!'});
        })
        .catch(next);
});

module.exports = router;