import http from "../../http-common";
import TagService from "./TagService";

jest.mock("../../http-common", () => {
    return { get: jest.fn()}
});

describe('Tag Service Test', () => {
    it('getTagsByPageType be caled with pageType', () => {
        const pageType = 'year';
        TagService.getTagsByPageType(pageType);
        expect(http.get).toHaveBeenCalled();
        expect(http.get).toBeCalledWith(`/tag/get_tags_by_page_type/${pageType}`);
    });
});