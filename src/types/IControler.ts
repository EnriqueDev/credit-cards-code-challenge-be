import { Router } from 'express'

export interface IControler {
  router: Router
  path: string
  initRoutes(): void
}
