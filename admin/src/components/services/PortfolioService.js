import http from "../../http-common";

const getAlbum = albumHash => {
    return http.get("/portfolio/get_by_album_hash/"+ albumHash);
};

const saveAlbum = data => {
    return http.post("/portfolio/save_album", data);
};

export default {
    getAlbum,
    saveAlbum
};

