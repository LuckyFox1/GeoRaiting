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
                                .findOne({_id: tmpLike.metcast_id}).populate('rating')
                                .then(metcast => {
                                    metcast.rating.push(tmpLike._id);
                                    metcast.save();
                                })
                                .catch(next),

                            User
                                .findOne({_id: tmpLike.user_id})
                                .then(user => {
                                    user.likes.push(tmpLike._id);
                                    user.save();
                                }).catch(next)
                        ]).then(() => {
                            Metcast
                                .findOne({_id: req.body.like.metcast_id}).populate('rating')
                                .then(metcast => {
                                    let ratingSum = 0;
                                    for (let i = 0; i < metcast.rating.length; i++) {
                                        ratingSum += metcast.rating[i].isPositive;
                                    }
                                    let newRating = ((ratingSum + req.body.like.isPositive) / (metcast.rating.length + 1)).toFixed(1);
                                    res.json({like, newRating});
                                }).catch(next);
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

router.delete('/like/:likeId/metcast/:metcastId', (req, res, next) => {
    Like.remove({_id: req.params.likeId})
        .then(() => {
            Metcast
                .findOne({_id: req.params.metcastId}).populate('rating')
                .then(metcast => {
                    let ratingSum = 0;
                    for (let i = 0; i < metcast.rating.length; i++) {
                        ratingSum += metcast.rating[i].isPositive;
                    }
                    let newRating = metcast.rating.length ? (ratingSum / metcast.rating.length).toFixed(1) : '0.0';
                    res.json({message: 'Like delete!', newRating});
                }).catch(next);
        })
        .catch(next);
});

module.exports = router;