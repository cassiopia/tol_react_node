import http from "../../http-common";

const getTags = (itemId, pageType, tagType) => {
    return http.get(`/tag/get_tags/${itemId}/${tagType}/${pageType}`);
};

const addTag = data => {
    return http.post("/tag/add_tag", data);
};

const editTag = data => {
    // todo Пока не отображу реальный список тэгов, не смогу это сделать корректно
    return http.put("/tag/edit_tag", data);
};

export default {
    getTags,
    addTag,
    editTag
};
