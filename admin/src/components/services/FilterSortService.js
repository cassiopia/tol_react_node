import http from "../../http-common";

// todo Подумать, может быть отнести эти методы в PageService

const getFilters = (itemId, pageType, tagType) => {
    return http.get(`/tag/get_tags/${itemId}/${tagType}/${pageType}`);
};