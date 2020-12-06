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
}
