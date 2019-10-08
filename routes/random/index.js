var express = require('express');
var router = express.Router();
const images = require('./Image')
const quotes = require('./Quote')
const users = require('./User')

/* GET Random Data */
router.get('/', (req, res) => {res.send("Forbidden")});
router.get('/images', images);
router.get('/quotes', quotes);
router.get('/users', users);

module.exports = router;
