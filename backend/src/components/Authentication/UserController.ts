import {Request, Response} from 'express';

export class UserController {

  public allAccess(req: Request, res: Response) {
    res.status(200).send("Public Content.");
  }

  public userBoard(req: Request, res: Response) {
    res.status(200).send("User Content.");
  }

  public adminBoard(req: Request, res: Response) {
    res.status(200).send("Admin Content.");
  }

  public moderatorBoard(req: Request, res: Response) {
    res.status(200).send("Moderator Content.");
  }
}