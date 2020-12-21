import {Request, Response} from 'express';
import {Tag} from '../../models/Tag.model';
import {Page} from '../../models/Page.model';
import {PageTag} from "../../models/PageTag.model";

const pageTypePortfolio: string = "portfolio";
const pageTypeBlog: string = "blog";


export class TagController {

    public addTag(req: Request, res: Response) {
        const itemId: string = req.body.itemId;

        if (itemId) {

            Tag.create({
                title: req.body.title,
                type: req.body.tagType,

            }).then(tag => {
                PageTag.create({
                    pageId: itemId,
                    tagId: tag.getDataValue('id')
                }).then(() => res.status(202).json({data: "success"}))
                    .catch((err: Error) => res.status(500).json(err));

            }).catch((err: Error) => res.status(500).json(err));

        } else {
            res.status(404).json({data: "Page not found"});
        }

    }

    public editTag(req: Request, res: Response) {
        // Tag.update(
        //     {
        //         title: req.body.title,
        //     },
        //     {where: {id: req.body.tagId, type: req.body.tagType}}
        // ).then(() => res.status(202).json({data: "success"}))
        //     .catch((err: Error) => res.status(500).json(err));
    }


    public getTags(req: Request, res: Response) {

        if (req.params.itemId) {

            Tag.findAll<Tag>({
                where: {
                    type: req.params.tagType
                },
                include: [{
                    model: Page,
                    where: {
                        id: req.params.itemId
                    }
                }]
            }).then(tag => {
                console.log(tag);
                res.json(tag);
            }).catch((err: Error) => res.status(500).json(err));
        }


    }

}
