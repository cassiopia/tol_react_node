import express from "express";
var requestPromise = require('request-promise');

import portfolioRouter from "./routes/portfolio";
//request = require('request');

// Create Express server
const app = express();

//const app: express.Application = express ();

// Express configuration
app.set("port", process.env.PORT || 3000);

/**
 * Primary app routes.
 */
app.get('/', function (req, res) {
    res.send('Hello!');
});


app.use('/portfolio', portfolioRouter);
// //47BjJf5
// // Получить картинки конетерного альбома (тут испания)
// app.get('/testporfolio', function (req, res) {
//     //res.send('Hello portfolij!');
//     var options = {
//         //uri: 'https://api.imgur.com/3/account/triponlife',
//         uri: 'https://api.imgur.com/3/album/47BjJf5/images',
//         headers: {
//             'Authorization': 'Client-ID 6052db0e19156fa'
//         },
//         json: true // Automatically parses the JSON string in the response
//     };
//
//     requestPromise(options)
//         .then(function (repos: any) {
//             // console.log('User has %d repos', repos.length);
//             //  console.log('Прокатило');
//             //  console.log(repos);
//             res.send('Прокатило!');
//             console.log(repos);
//         })
//         .catch(function (err : any) {
//             // API call failed...
//             //console.log('НЕ Прокатило');
//             res.send('НЕ Прокатило!');
//         });
// });


export default app;