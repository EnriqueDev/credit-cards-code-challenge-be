import express, { Request, Response } from 'express'
import { IControler } from '../../types/IControler'
import CardsService from './service/CardsService'
import { validOccupations } from './models/Card'

class CardsController implements IControler {
  public path = '/cards'
  public router = express.Router()

  constructor() {
    this.initRoutes()
  }

  public initRoutes() {
    this.router.get(this.path, this.getValidCards)
  }

  // Expects two query params
  private getValidCards = (req: Request, res: Response) => {
    const query = req.query
    const occupation = query.occupation
    const income = query.income

    if (!occupation || !income) {
      res
        .status(400)
        .send('Bad request: required query parameters not provided')
      return
    }

    if (!validOccupations.includes(occupation)) {
      // Inform FE that occupation is incorrect
      res.status(400).send('Bad request: occupation param is invalid')
      return
    }

    try {
      const parsedIncome = parseFloat(income)
      const availableCards = CardsService.getAvailableCards(
        occupation,
        parsedIncome,
      )

      const availableCardsJSON = availableCards.map(card => card.toJSON())
      res.status(200).json(availableCardsJSON)
      return
    } catch (e) {
      res.status(400).send('Bad request: params are invalid')
      return
    }
  }
}

export default CardsController
