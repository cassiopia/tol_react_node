import {Request, Response} from 'express';
import {Tag} from '../../models/Tag.model';
import {Page} from '../../models/Page.model';
import {PageTag} from "../../models/PageTag.model";
import {Album} from "../../models/Album.model";

export class TagController {

    public addTag(req: Request, res: Response) {

        Tag.findOrCreate({
            where: {title: req.body.title},
            defaults: {
                title: req.body.title,
                type: req.body.tagType
            }
        }).then(([tag, created]) => {
            res.status(201).json(tag);
        }).catch((err: Error) => res.status(500).json(err));
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

    public deleteTag(req: Request, res: Response) {

        const id = req.params.id;

        Tag.destroy({
            where: {id: id}
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "Tag was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete tag with id=${id}. Maybe tag was not found!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Could not delete tag with id=" + id
                });
            });
    }

}
