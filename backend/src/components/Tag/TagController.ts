import {Request, Response} from 'express';
import {Tag} from '../../models/Tag.model';
import {Page} from '../../models/Page.model';
import {PageTag} from "../../models/PageTag.model";

// todo Cелать "не прямое удаление" тэга со страницы и в модель внести соответствующие поля

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

    private async _checkTag(tagId: number) {

        if (tagId) {

            return await PageTag.count({
                where: {tag_id: [tagId]}
            }).then(dataCount => {

                console.log('dataCount');
                console.log(dataCount);
                return (dataCount <= 1);
            }).catch
            (
                () => {
                    return false;
                }
            );
        } else {
            return false;
        }
    }

    public async editTag(req: Request, res: Response) {

        let isDataCountValid = await this._checkTag(req.body.tagId);

        if (isDataCountValid || req.body.isEditingApproved) {

            Tag.update(
                {
                    title: req.body.title,
                },
                // todo  А нужно ли реально tagType? Следующим коммитом хорошенько проверить
                {where: {id: req.body.tagId, type: req.body.tagType}}
            ).then(
                () => res.status(202).json({data: "success"})
            ).catch((err: Error) => res.status(500).json(err));

        } else {
            res.status(403).json({data: "Нельзя редактировать тэг"});
        }
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

    public getTagsByPageType(req: Request, res: Response) {

        Tag.findAll<Tag>({
            where: {
                type: req.params.tagType,
                page_type: req.params.pageType,
            }
        }).then(tag => {
            console.log(tag);
            res.json(tag);
        }).catch((err: Error) => res.status(500).json(err));

    }

    public async deleteTag(req: Request, res: Response) {

        const isDeletingApproved = JSON.parse(req.params.isDeletingApproved);
        const tagId = Number(req.params.id);

        let isDataCountValid = await this._checkTag(tagId);

        if (isDataCountValid || isDeletingApproved) {

            Tag.destroy({
                where: {id: tagId}
            })
                .then(num => {
                    if (num == 1) {
                        res.send({
                            message: "Tag was deleted successfully!"
                        });
                    } else {
                        res.send({
                            message: `Cannot delete tag with id=${tagId}. Maybe tag was not found!`
                        });
                    }
                })
                .catch(err => {
                    res.status(500).send({
                        message: "Could not delete tag with id=" + tagId
                    });
                });
        } else {
            res.status(403).json({data: "Cannot delete tag"});
        }
    }

}
