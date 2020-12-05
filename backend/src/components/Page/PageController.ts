import {Request, Response} from 'express';
import {Page, PageInterface} from '../../models/Page.model';


export class PageController {

    // public index(_req: Request, res: Response) {
    //     Album.findAll<Album>({})
    //         .then((nodes: Array<Album>) => res.json(nodes))
    //         .catch((err: Error) => res.status(500).json(err))
    // }
    //
    // public create(req: Request, res: Response) {
    //     const params: AlbumInterface = req.body;
    //
    //     Album.create<Album>(params)
    //         .then((album: Album) => res.status(201).json(album))
    //         .catch((err: Error) => res.status(500).json(err))
    // }

    public save(req: Request, res: Response) {

        // const albumHash: string = req.body.album_hash;
        //
        // Page.findOrCreate({
        //     where: {album_hash: albumHash},
        //     defaults: {
        //         album_hash: albumHash,
        //         title: req.body.title,
        //         description: req.body.description
        //     }
        // }).then(([page, created]) => {
        //
        //     if (!created) {
        //
        //         Page.update(
        //             {
        //                 title: req.body.title,
        //                 description: req.body.description
        //             },
        //             {where: {album_hash: albumHash}}
        //         ).then(
        //             () => res.send({id: page.getDataValue('id'), message: "success"})
        //
        //         ).catch((err: Error) => res.status(500).json(err));
        //     }
        //     else {
        //         // () => res.status(202).json({id: album.getDataValue('id'), message: "success"});
        //         res.send({id: page.getDataValue('id'), message: "success"});
        //     }
        //
        //     //res.send(album.getDataValue('id'));
        // })
        //     .catch((err: Error) => res.status(500).json(err));
    }

    public getPage(req: Request, res: Response) {

    }

    //
    // public getByAlbumHash(req: Request, res: Response) {
    //
    //     const albumHash: string = req.params.albumHash;
    //
    //     Album.findOne<Album>({where: {album_hash: albumHash}})
    //         .then((album: Album | null) => {
    //             if (album) {
    //                 res.json(album)
    //             } else {
    //                 // todo ожет быть писать эту ситуацию в лог?...
    //                 res.status(404).json({errors: ['Album not found']})
    //             }
    //         })
    //         .catch((err: Error) => res.status(500).json(err))
    //
    // }
}
