import http from "../../http-common";

const getTags = (itemId, pageType, tagType) => {
    return http.get(`/tag/get_tags/${itemId}/${tagType}/${pageType}`);
};

const getTagsByPageType = (pageType) => {
    return http.get(`/tag/get_tags_by_page_type/${pageType}`);
};

const getAllTags = () => {
    return http.get(`/tag/get_all_tags`);
};

const addTag = data => {
    return http.post("/tag/add_tag", data);
};

const editTag = data => {
    return http.put("/tag/edit_tag", data);
};

const remove = (id, isDeletingApproved) => {
    return http.delete(`/tag/${id}/${isDeletingApproved}`);
};

export default {
    getTags,
    getTagsByPageType,
    getAllTags,
    addTag,
    editTag,
    remove
};
