import { Request, Response } from 'express'

export type Middleware = (
  req: Request,
  res: Response,
  next: (err?: any) => void,
) => void
