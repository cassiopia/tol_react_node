import http from "../../http-common";

const get = id => {
    //return http.get(`/tutorials/${id}`);
};

const save = data => {

    // todo ля начала проверь отработает ли вставка в БД

    // todo ровека, новые данные или нет....
    console.log(data);
    return http.post("/portfolio/save_album", data);
    //todo думаю проверочку (ну имгуронли дата) нужно запилать сюда
    // return http.post("/tutorials", data);
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

