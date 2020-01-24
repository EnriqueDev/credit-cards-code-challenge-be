import express, { Request, Response } from 'express'
import { IControler } from '../../types/IControler'

class HomeControler implements IControler {
  public path = '/'
  public router = express.Router()

  constructor() {
    this.initRoutes()
  }

  public initRoutes() {
    this.router.get(this.path, this.index)
  }

  private index = (req: Request, res: Response) => {
    res.send('Hello world!')
  }
}

export default HomeControler
