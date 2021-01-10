import {Request, Response} from 'express';
import {Page, PageInterface} from '../../models/Page.model';
import {PageImage} from '../../models/PageImage.model';


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
                            .catch((err: Error) => res.status(500).json(err))
                    } else {
                        res.send({
                            message: `Cannot create page!`
                        });
                    }
                }
            )
            .catch((err: Error) => res.status(500).json(err))
    }

    // todo Картинку тоже обновлять
    public update(req: Request, res: Response) {
        Page.update(
            {
                title: req.body.title,
                description: req.body.description
            },
            {where: {id: req.body.id}}
        ).then(
            (page) => res.status(202).json(page)
        )
            .catch(
                (err: Error) => res.status(500).json(err)
            )
    }

    // todo Картинку же ещё тащить нужно...
    public getAllByPageType(req: Request, res: Response) {

        Page.findAll<Page>(
            {where: {pageType: req.params.pageType}})
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
                    where: {
                        id: req.params.pageId
                    }
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
