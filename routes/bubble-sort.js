const express = require('express');
const router = express('router');
const sortModule = require('../modules/bubble-sort-module.js');
const bubbleSort = sortModule.bubbleSort;

router.get('/', (req,res) => {
    res.render('index');
});

router.post('/', (req,res) => {
    let unsortedArray = [];
    for(let i in req.body){
        unsortedArray.push(parseInt(req.body[i]));
    }
    let sortedArray = bubbleSort(unsortedArray);
    res.render('index', {array: sortedArray});
});

module.exports = router;