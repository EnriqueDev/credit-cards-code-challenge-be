import express, { Application, Request, Response } from 'express'
import { IControler } from './types/IControler'
import { Middleware } from './types/Middleware'

export type AppConfig = {
  port: number
  controllers: IControler[]
  middleware: Middleware[]
}

export default class App {
  private app: Application
  private port: number

  constructor(appConfig: AppConfig) {
    this.app = express()
    this.port = appConfig.port

    // Initalize routes and middleware
    this.registerRoutes(appConfig.controllers)
    this.initMiddleware(appConfig.middleware)
  }

  private registerRoutes(controlers: IControler[]) {
    controlers.forEach(controler => {
      this.app.use('/', controler.router)
    })
  }

  public initMiddleware(middleware: Middleware[]) {
    middleware.forEach(middleware => {
      this.app.use(middleware)
    })
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on http://localhost:${this.port}`)
    })
  }
}
