import http from "../../http-common";

// const getAlbum = albumHash => {
//     return http.get("/portfolio/get_by_album_hash/"+ albumHash);
// };
//
// const saveAlbum = data => {
//     return http.post("/portfolio/save_album", data);
// };

const getPage = (pageType, ) => {
    //return http.get("/portfolio/get_by_album_hash/"+ albumHash);
};

const savePage = data => {
    if (!data.id) {
        return http.post("/page/create_page", data);
    } else {
        return http.put("/page/update_page", data);
    }
};

const create = data => {
    // return http.post("/tutorials", data);
};

const update = (id, data) => {
    // return http.put(`/tutorials/${id}`, data);
};

export default {
    getPage,
    savePage
};

