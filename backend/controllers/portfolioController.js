exports.getPortfolio = function (request, response) {
    response.send(`Раздел ${request.params.id}`);
};
exports.getListPortfolio = function (request, response) {
    response.send("Разделы портфолио");
};