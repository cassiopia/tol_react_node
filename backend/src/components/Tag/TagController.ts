import {Request, Response} from 'express';
import {Tag} from '../../models/Tag.model';
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
        Tag.update(
            {
                title: req.body.title,
            },
            {where: {id: req.body.tagId, type: req.body.tagType}}
        ).then(() => res.status(202).json({data: "success"}))
            .catch((err: Error) => res.status(500).json(err));
    }


    public getTags(req: Request, res: Response) {
        console.log(req.params);

        var pageTagItemId: number = 0;

        // if (req.params.pageType === pageTypePortfolio) {
        //
        //     //проверяем есть ли альбом
        //     Album.findOne<Album>({where: {album_hash: req.params.itemId}})
        //         .then((album: Album | null) => {
        //             if (album) {
        //                 pageTagItemId = album.getDataValue('id');
        //             } else {
        //                 res.status(404).json({errors: ['Album not found']});
        //             }
        //         })
        //         .catch((err: Error) => res.status(500).json(err));
        //
        // } else {
        //     res.status(404).json({data: "item not found"});
        // }

        if (req.params.itemId) {
            console.log('Проверка!');

            // // todo Разобраться как с джойнами сделать запрос. Учесть не только тип страницы, но и тип тэга
            //
            // Tag.findAll<Tag>({
            //     include: [{
            //         model: PageTag,
            //         where: {
            //             item_id: 1
            //         }
            //     }]
            // }).then(tag => {
            //     console.log('!!!!!!!!!!!!!++++++++++');
            //     console.log(tag);
            //     res.send(tag);
            // });
            //
            // Tag.create({
            //     title: req.body.title,
            //     type: req.body.tag_type,
            //
            // }).then(tag => {
            //     PageTag.create({
            //         item_id: pageTagItemId,
            //         tag_id: tag.getDataValue('id'),
            //         page_type: req.body.page_type,
            //
            //     }).then(() => res.status(202).json({data: "success"}))
            //         .catch((err: Error) => res.status(500).json(err));
            //
            // }).catch((err: Error) => res.status(500).json(err));
            // } else {
            //     res.status(404).json({data: "item not found"});
            // }
        }


    }

}
