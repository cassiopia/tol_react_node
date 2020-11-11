const dbModels = require("../../models/index");
const Album = dbModels.album;
//const Op = dbModels.Sequelize.Op;

// Create and Save a new Album
exports.create = (req: any, res: any) => {
    // Validate request
    // if (!req.body.title || !req.body.description) {
    //     res.status(400).send({
    //         message: "Content can not be empty!"
    //     });
    //     return;
    // }

    console.log(req.body);

    // Create a Album
    const album = {
        album_id: req.body.album_id,
        title: req.body.title,
        description: req.body.description
    };

   // Save Tutorial in the database
    Album.create(album)
        .then(function (data: any) {
            res.send(data);
        })
        .catch(function (err: any) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Album."
            });
        });
};
