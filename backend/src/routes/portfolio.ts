import {AlbumController} from "../components/Portfolio/AlbumController";

module.exports = (app: any) => {

    const router = require("express").Router();

    const photoController = require("../components/Portfolio/PhotoController");

    router.use("/get_album_info/:albumHash", photoController.getAlbumInfo);

    router.use("/get_album_hashes", photoController.getAlbumHashes);

    router.use("/get_album_images/:albumHash", photoController.getAlbumImages);

    router.use("/get_albums", photoController.getAlbums);

    const album = new AlbumController();

    router.post("/save_album", album.save);

    router.get("/get_by_album_hash/:albumHash", album.getByAlbumHash);

    app.use('/portfolio', router);
};
