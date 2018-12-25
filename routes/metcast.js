'use strict';

const express = require('express');

const Metcast = require('../models/metcast');

const postMetcast = require('../middleware/postForMetcast'),
    putMetcast = require('../middleware/putForMetcast');

const router = express.Router();

router.get('/metcasts', (req, res, next) => {
    Metcast.find({}).populate('rating')
        .then(tmpMetcasts => {
            let sum = 0;
            let metcasts = JSON.parse(JSON.stringify(tmpMetcasts));

            for (let i = 0; i < metcasts.length; i++) {
                sum = 0;
                for (let j = 0; j < metcasts[i].rating.length; j++) {
                    sum += metcasts[i].rating[j].isPositive;
                }
                metcasts[i].rating = (sum / tmpMetcasts[i].rating.length || 0).toFixed(1);
            }

            metcasts.sort((metcastA, metcastB) => {
                return metcastB.rating - metcastA.rating;
            });

            res.json({metcasts});
        })
        .catch(next);
});

router.post('/metcasts', postMetcast, (req, res, next) => {
    new Metcast(req.body.metcast)
        .save()
        .then(metcast => {
            res.json({metcast});
        })
        .catch(next);
});

router.put('/:metcastId', putMetcast, (req, res, next) => {
    Metcast.findOneAndUpdate({_id: req.params.metcastId}, req.body.metcast)
         .then(metcast => {
             res.json({
                 metcast: Object.assign(metcast.toObject(), req.body.metcast)
             });
         })
         .catch(next);
});

router.delete('/:metcastId', (req, res, next) => {
    Metcast.remove({_id: req.params.metcastId})
        .then(() => {
            res.json({message: 'Metcast delete!'});
        })
        .catch(next);
});

module.exports = router;