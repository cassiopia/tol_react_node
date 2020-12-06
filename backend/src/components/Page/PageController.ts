import {Request, Response} from 'express';
import {Page, PageInterface} from '../../models/Page.model';

export class PageController {

    public create(req: Request, res: Response) {
        const params: PageInterface = req.body;

        Page.create<Page>(params)
            .then((page: Page) => res.status(201).json(page))
            .catch((err: Error) => res.status(500).json(err))
    }

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

    public getAllByPageType(req: Request, res: Response) {

        Page.findAll<Page>(
            {where: {page_type: req.params.pageType}})
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
}