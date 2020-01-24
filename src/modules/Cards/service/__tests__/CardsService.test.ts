import CardsService from '../CardsService'

// Note, this is tested just to verify that the behaviour for this given example is correct
// to test this correctly a DB should be mocked.
describe('Cards Service', () => {
  it('should give the student and anywhere card to sudent with insufficient income', () => {
    const result = CardsService.getAvailableCards('student', 0)
    expect(result).toHaveLength(2)
    expect(result.filter(e => e.toJSON().name === 'Student Life')).toHaveLength(
      1,
    )
    expect(
      result.filter(e => e.toJSON().name === 'Anywhere Card'),
    ).toHaveLength(1)
  })

  it('qualifier for 3 cards if the conditions are met', () => {
    const result = CardsService.getAvailableCards('student', 17000)
    expect(result).toHaveLength(3)
    expect(result.filter(e => e.toJSON().name === 'Student Life')).toHaveLength(
      1,
    )

    expect(
      result.filter(e => e.toJSON().name === 'Anywhere Card'),
    ).toHaveLength(1)

    expect(result.filter(e => e.toJSON().name === 'Liquid Card')).toHaveLength(
      1,
    )
  })
  it('should provide just the anywhere card if the conditions are met', () => {
    const result = CardsService.getAvailableCards('part_time', 15000)
    expect(result).toHaveLength(1)

    expect(
      result.filter(e => e.toJSON().name === 'Anywhere Card'),
    ).toHaveLength(1)
  })
})
