import express = require('express');

const requestPromise = require('request-promise');
// Create a new express app instance
const app: express.Application = express();

const router = express.Router();

const portfolioController = require("../components/Portfolio/PortfolioController");

router.use (function (req, res, next) {
    res.header ("Access-Control-Allow-Origin", "http://localhost:3001"); // обновляем в соответствии с доменом, из которого делаем запрос
    res.header ("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.use("/get_album_info/:albumHash", portfolioController.getAlbumInfo);

router.use("/get_album_hashes", portfolioController.getAlbumHashes);

router.use("/get_album_images/:albumHash", portfolioController.getAlbumImages);

export default router;
