import {Request, Response} from 'express';
import {Page, PageInterface} from '../../models/Page.model';
import {PageImage} from '../../models/PageImage.model';
import {Tag} from "../../models/Tag.model";
import {PageTag} from "../../models/PageTag.model";


// todo Навести марафет в этом классе
export class PageController {

    public create(req: Request, res: Response) {
        const params: PageInterface = req.body;

        Page.create<Page>(params)
            .then(
                (page: Page) => {
                    const pageId = page.getDataValue('id');

                    if (pageId) {
                        PageImage.create({
                            pageId: pageId,
                            imageSrc: req.body.imageSrc
                        }).then((pageImage: PageImage) => res.status(201).json(pageImage))
                            .catch((err: Error) => res.status(500).json(err));

                        const tagIdsYear = req.body.tagIdsYear;
                        const tagIdsCountry = req.body.tagIdsCountry;

                        if ((tagIdsYear && tagIdsYear.length > 0) ||
                            (tagIdsCountry && tagIdsCountry.length > 0)) {

                            const insertArray = this._prepareArrayPageTags(tagIdsYear, tagIdsCountry, pageId);
                            this._insertTagId(insertArray, res);
                        }


                    } else {
                        res.send({
                            message: `Cannot create page!`
                        });
                    }
                }
            )
            .catch((err: Error) => res.status(500).json(err))
    }


    public update(req: Request, res: Response) {
        const pageId = req.body.id;


        Page.update<Page>(
            {
                title: req.body.title,
                description: req.body.description
            },
            {where: {id: pageId}}
        ).then(
            (page) => {
                if (pageId) {
                    PageImage.update<PageImage>(
                        {
                            imageSrc: req.body.imageSrc
                        },
                        {where: {id: pageId}}
                    ).then(
                        (page) => res.status(202).json(page)
                    )
                        .catch((err: Error) => res.status(500).json(err));

                    // todo Мессаги тут служеюные. Крепко подумать над их содержимым

                    const tagIdsYear = req.body.tagIdsYear;
                    const tagIdsCountry = req.body.tagIdsCountry;


                    if ((tagIdsYear && tagIdsYear.length > 0) ||
                        (tagIdsCountry && tagIdsCountry.length > 0)) {


                        PageTag.destroy({
                            where: {pageId: pageId}
                        })
                            .then(
                                num => {
                                    // todo Вообе нав сю эту бадягу написать тэсты, и чем быстрее тем лучше

                                    const insertArray = this._prepareArrayPageTags(tagIdsYear, tagIdsCountry, pageId);
                                    this._insertTagId(insertArray, res);
                                }
                            )
                            .catch(err => {
                                res.status(500).send({
                                    message: "Could not delete Tags with pageId=" + pageId
                                });
                            });
                    } else {
                        // todo Чета тут придумать, вместо этого сонсольлога
                        console.log('!!!!!!!!!');
                    }


                } else {
                    res.send({
                        message: `Cannot update page!`
                    });
                }

            }
        )
            .catch(
                (err: Error) => res.status(500).json(err)
            )


    }

    // todo Окучить метод учитывая типы данных. Разобраться с типами входных данных any -- не вариант!
    // todo И можно обозначить тип выходных данных

    private _prepareArrayPageTags(tagIdsYear: any, tagIdsCountry: any, pageId: any) {
        var insertArray: object[] = [];

        if ((tagIdsYear && tagIdsYear.length > 0) && (tagIdsCountry && tagIdsCountry.length > 0)) {

            const resultArray = tagIdsCountry.concat(tagIdsYear);
            resultArray.map(function (tagId: number) {
                insertArray = [...insertArray, {tagId: tagId, pageId: pageId}];
            });
        } else if (tagIdsYear && tagIdsYear.length > 0) {

            tagIdsYear.map(function (tagId: number) {
                insertArray = [...insertArray, {tagId: tagId, pageId: pageId}];
            });
        } else {
            tagIdsCountry.map(function (tagId: number) {
                insertArray = [...insertArray, {tagId: tagId, pageId: pageId}];
            });
        }

        return insertArray;
    }

    // todo  any -- не вариант!
    private _insertTagId(insertArray: any, res: Response) {
        PageTag.bulkCreate(insertArray)
            .then(pageTag => {
                (pageTag: PageTag) => res.json(pageTag);
            })
            .catch(
                (err: Error) => res.status(500).json(err)
            );
    }


    public getAllByPageType(req: Request, res: Response) {

        Page.findAll<Page>(
            {
                where: {
                    pageType: req.params.pageType
                },
                include: [{
                    model: PageImage
                }]
            })
            .then(
                (page) => {
                    if (page) {
                        res.json(page);
                    } else {
                        res.status(404).json({errors: ["Pages not found"]});
                    }
                }
            )
            .catch((err: Error) => res.status(500).json(err));
    }

    public getOneById(req: Request, res: Response) {

        Page.findOne<Page>(
            {
                where: {
                    id: req.params.pageId
                },
                include: [{
                    model: PageImage,
                    // where: {
                    //     id: req.params.pageId
                    // }
                }]
            })
            .then((page: Page | null) => {
                if (page) {
                    res.json(page)
                } else {
                    res.status(404).json({errors: ['Page not found']})
                }
            })
            .catch((err: Error) => res.status(500).json(err));
    }

    public softDeletePage(req: Request, res: Response) {

        const id = req.params.id;

        Page.destroy({
            where: {
                id: id
            }
        }).then(num => {
            if (num == 1) {
                res.send({
                    message: "Page was soft deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete page with id=${id}. Maybe tag was not found!`
                });
            }
        })
            .catch(err => {
                res.status(500).send({
                    message: "Could not delete page with id=" + id
                });
            });
    }

}
