// var express = require('express');
// var router = express.Router();
//
// /* GET users listing. */
// // router.get('/', function(req, res, next) {
// //     res.send('test page');
// // });
// //
// // router.get('/me', function(req, res, next) {
// //     res.send('This is my test page :)');
// // });
//
// module.exports = router;

import express = require('express');

// Create a new express app instance
const app: express.Application = express();

app.get('/', function (req, res) {
    res.send('Hello Test P!');
});