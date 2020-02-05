const express = require("express");
const portfolioController = require("../controllers/portfolioController.js");
const portfolioRouter = express.Router();

portfolioRouter.use("/:id", portfolioController.getPortfolio);
portfolioRouter.use("/", portfolioController.getListPortfolio);

module.exports = portfolioRouter;