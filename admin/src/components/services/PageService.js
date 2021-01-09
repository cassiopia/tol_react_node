import http from "../../http-common";

const getByPageType = (pageType) => {
    return http.get("/page/get_by_page_type/" + pageType);
};

const getOneById = (pageId) => {
    return http.get("/page/get_one_by_id/" + pageId);
};

const savePage = data => {
    if (!data.id) {
        return http.post("/page/create_page", data);
    } else {
        return http.put("/page/update_page", data);
    }
};

const remove = id => {
    return http.delete(`/page/${id}`);
};

export default {
    getByPageType,
    getOneById,
    savePage,
    remove
};

