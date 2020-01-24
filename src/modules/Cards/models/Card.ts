type ValidatorFunc = (occupation: Occupation, annualIncome: number) => boolean

type CardData = {
  name: string
  apr: number
  balanceTransferOfferDuration: number
  purchaseOfferDuration: number
  creditAvailable: number
}

interface CardDataModel extends CardData {
  validateFunc: ValidatorFunc
}

export type Occupation = 'full_time' | 'part_time' | 'student'

export const validOccupations: Occupation[] = [
  'full_time',
  'part_time',
  'student',
]

// CreditCard entity.
// This was designed as a class instead of plain objects because
// refactoring it to use an ORM like sequelize would be easier
class Card {
  // Card name
  private name: string
  // percentage
  private apr: number
  // measured in months
  private balanceTransferOfferDuration: number
  // measured in months
  private purchaseOfferDuration: number
  // measured in GBP
  private creditAvailable: number

  // This function will be used to validate if the card is available for an user
  private validateFunc: ValidatorFunc

  constructor({
    name,
    apr,
    balanceTransferOfferDuration,
    purchaseOfferDuration,
    creditAvailable,
    validateFunc,
  }: CardDataModel) {
    this.name = name
    this.apr = apr
    this.balanceTransferOfferDuration = balanceTransferOfferDuration
    this.purchaseOfferDuration = purchaseOfferDuration
    this.creditAvailable = creditAvailable
    this.validateFunc = validateFunc
  }

  public validate(occupation: Occupation, annualIncome: number) {
    return this.validateFunc(occupation, annualIncome)
  }

  // Transforms returns a JSON to be sent to the user after the request
  public toJSON(): CardData {
    return {
      name: this.name,
      apr: this.apr,
      balanceTransferOfferDuration: this.balanceTransferOfferDuration,
      purchaseOfferDuration: this.purchaseOfferDuration,
      creditAvailable: this.creditAvailable,
    }
  }
}

export default Card
