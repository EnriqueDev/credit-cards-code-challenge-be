import Card, { Occupation } from '../models/Card'

// Provides access to the card data.
// In a regular project this information would live in a DB and would be properly accessed
// because of the given scope for this projects a mocked service will be used.
class CardService {
  // Stores an array of the available cards to be requested
  private cards: Card[]

  constructor() {
    // Cards array, new cards can be added here to be checked
    // Remember to add a validate function
    this.cards = [
      new Card({
        id: 0,
        name: 'Student Life',
        apr: 18.9,
        balanceTransferOfferDuration: 0,
        purchaseOfferDuration: 6,
        creditAvailable: 1200,
        validateFunc: (occupation: Occupation, _) => occupation === 'student',
      }),
      new Card({
        id: 1,
        name: 'Anywhere Card',
        apr: 33.9,
        balanceTransferOfferDuration: 0,
        purchaseOfferDuration: 0,
        creditAvailable: 300,
        validateFunc: (_, __) => true,
      }),
      new Card({
        id: 2,
        name: 'Liquid Card',
        apr: 33.9,
        balanceTransferOfferDuration: 12,
        purchaseOfferDuration: 6,
        creditAvailable: 3000,
        validateFunc: (_, income) => income > 16000,
      }),
    ]
  }

  getAvailableCards(occupation: Occupation, income: number) {
    return this.cards.filter(card => card.validate(occupation, income))
  }
}

// Export an initalised service to avoid creating
// the cards every time it is imported
export default new CardService()
