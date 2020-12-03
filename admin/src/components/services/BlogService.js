import http from "../../http-common";

const getArticle = articleId => {
    //return http.get("/portfolio/get_by_album_hash/"+ albumHash);
};

const saveArticle = data => {
   // return http.post("/portfolio/save_album", data);
};

const create = data => {
   // return http.post("/tutorials", data);
};

const update = (id, data) => {
   // return http.put(`/tutorials/${id}`, data);
};

export default {
    getArticle,
    saveArticle
};

