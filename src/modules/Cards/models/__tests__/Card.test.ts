import Card from '../Card'

describe('Card', () => {
  it('should implement a toJSON method returning all attributes', () => {
    const card = new Card({
      name: 'Test',
      apr: 0,
      balanceTransferOfferDuration: 0,
      purchaseOfferDuration: 0,
      creditAvailable: 100,
      validateFunc: () => true,
    })

    expect(card.toJSON()).toEqual({
      name: 'Test',
      apr: 0,
      balanceTransferOfferDuration: 0,
      purchaseOfferDuration: 0,
      creditAvailable: 100,
    })
  })

  it('should expose a validation method that uses the provided validation function', () => {
    const card = new Card({
      name: 'Test',
      apr: 0,
      balanceTransferOfferDuration: 0,
      purchaseOfferDuration: 0,
      creditAvailable: 100,
      validateFunc: (occupation, income) =>
        occupation === 'full_time' && income > 16000,
    })

    expect(card.validate('full_time', 17000)).toBeTruthy()
    expect(card.validate('full_time', 16000)).toBeFalsy()
    expect(card.validate('student', 17000)).toBeFalsy()
  })
})
