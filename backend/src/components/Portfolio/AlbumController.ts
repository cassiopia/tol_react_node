import { Request, Response } from 'express';
import { Album, AlbumInterface } from '../../models/album.model';
import { UpdateOptions, DestroyOptions } from 'sequelize';


export class AlbumController{

    public index (_req: Request, res: Response) {
        Album.findAll<Album>({})
            .then((nodes : Array<Album>) => res.json(nodes))
            .catch((err : Error) => res.status(500).json(err))
    }

    public create (req: Request, res: Response) {
        const params : AlbumInterface = req.body;

        Album.create<Album>(params)
            .then((node : Album) => res.status(201).json(node))
            .catch((err : Error) => res.status(500).json(err))
    }

    // public show (req: Request, res: Response) {
    //     const nodeId : number = req.params.id;
    //
    //     Album.findByPk<Album>(nodeId)
    //         .then((node : Album|null) => {
    //             if (node) {
    //                 res.json(node)
    //             } else {
    //                 res.status(404).json({errors: ['Node not found']})
    //             }
    //         })
    //         .catch((err : Error) => res.status(500).json(err))
    // }

    // public update (req: Request, res: Response) {
    //     const nodeId : number = req.params.id;
    //     const params : AlbumInterface = req.body;
    //
    //     const options : UpdateOptions = {
    //         where: {id: nodeId},
    //         limit: 1
    //     };
    //
    //     Album.update(params, options)
    //         .then(() => res.status(202).json({data: "success"}))
    //         .catch((err : Error) => res.status(500).json(err))
    // }

    // public delete (req: Request, res: Response) {
    //     const nodeId : number = req.params.id;
    //     const options : DestroyOptions = {
    //         where: {id: nodeId},
    //         limit: 1
    //     };
    //
    //     Album.destroy(options)
    //         .then(() => res.status(204).json({data: "success"}))
    //         .catch((err : Error) => res.status(500).json(err))
    // }
}
