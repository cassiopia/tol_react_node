import http from "../../http-common";

const get = id => {
    //return http.get(`/tutorials/${id}`);
};

const save = data => {

    // todo ля начала проверь отработает ли вставка в БД

    // todo ровека, новые данные или нет....
    //console.log(data.album_hash);
    //return http.post("/portfolio/save_album", data);
     return http.post("/portfolio/find_by_hash_or_create", data);
    //return http.get("/portfolio/get_by_album_hash/"+ data.album_hash);
    //todo думаю проверочку (ну имгуронли дата) нужно запилать сюда

};

const create = data => {
   // return http.post("/tutorials", data);
};

const update = (id, data) => {
   // return http.put(`/tutorials/${id}`, data);
};

export default {
    get,
    save
};

