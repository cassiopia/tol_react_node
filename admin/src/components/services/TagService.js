import http from "../../http-common";

const getTags = (itemId, pageType, tagType) => {
    return http.get(`/tag/get_tags/${itemId}/${tagType}/${pageType}`);
};

const addTag = data => {
    return http.post("/tag/add_tag", data);
};

const editTag = data => {
    return http.put("/tag/edit_tag", data);
};

const remove = id => {
    return http.delete(`/tag/${id}`);
};

export default {
    getTags,
    addTag,
    editTag,
    remove
};
