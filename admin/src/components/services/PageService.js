import http from "../../http-common";

const getByPageType = (pageType) => {
    return http.get("/page/get_by_page_type/" + pageType);
};

const savePage = data => {
    if (!data.id) {
        return http.post("/page/create_page", data);
    } else {
        return http.put("/page/update_page", data);
    }
};

export default {
    getByPageType,
    savePage
};

