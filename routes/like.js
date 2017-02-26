'use strict';

const express = require('express');

const router = express.Router();

const Like = require('../models/like'),
    Metcast = require('../models/metcast'),
    User = require('../models/user');

const postlike = require('../middleware/postForLike'),
    putLike = require('../middleware/putForLike');


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

router.post('/like', postlike, (req, res, next) => {
    Like.find({metcast_id: req.body.like.metcast_id, user_id: req.body.like.user_id})
        .then(like => {
            if (like.length === 0) {
                new Like(req.body.like)
                    .save()
                    .then(tmpLike => {
                        let like = tmpLike;

                        Promise.all([
                            Metcast
                                .findOne({_id: tmpLike.metcast_id})
                                .then(metcast => {
                                    metcast.rating.push(tmpLike._id);
                                    metcast.save();
                                }),

                            User
                                .findOne({_id: tmpLike.user_id})
                                .then(user => {
                                    user.likes.push(tmpLike._id);
                                    user.save();
                                })
                        ]).then(() => {
                            res.json({like});
                        }).catch(next);
                    }).catch(next);
            } else {
                res.json({message: 'Like is already exists!'});
            }
        }).catch(next);
});

router.put('/like/:likeId', putLike, (req, res, next) => {
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