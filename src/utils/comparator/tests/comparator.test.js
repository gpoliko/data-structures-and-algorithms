import Comparator from '../comparator'

describe('Comparator Tests', () => {
  it('should use the class\'s compare function for equality comparison', () => {
    const compare = new Comparator()

    expect(compare.equal(1, 1)).toBe(true)
    expect(compare.equal(2, 1)).toBe(false)
    expect(compare.equal(1, 2)).toBe(false)
    expect(compare.equal('test123', 'test123')).toBe(true)
    expect(compare.equal('test123', 'test321')).toBe(false)
  })

  it('should use the class\'s compare function for lessThan comparison', () => {
    const compare = new Comparator()

    expect(compare.lessThan(1, 1)).toBe(false)
    expect(compare.lessThan(1, 2)).toBe(true)
    expect(compare.lessThan(2, 1)).toBe(false)
    expect(compare.lessThan('test', 'test')).toBe(false)
    expect(compare.lessThan('test', 'test123')).toBe(true)
    expect(compare.lessThan('test123', 'test')).toBe(false)
  })

  it('should use the class\'s compare function for greaterThan comparison', () => {
    const compare = new Comparator()

    expect(compare.greaterThan(1, 1)).toBe(false)
    expect(compare.greaterThan(1, 2)).toBe(false)
    expect(compare.greaterThan(2, 1)).toBe(true)
    expect(compare.greaterThan('test', 'test')).toBe(false)
    expect(compare.greaterThan('test', 'test123')).toBe(false)
    expect(compare.greaterThan('test123', 'test')).toBe(true)
  })

  it('should use the class\'s compare function for lessThan or equality comparison', () => {
    const compare = new Comparator()

    expect(compare.lessThanOrEqual(1, 1)).toBe(true)
    expect(compare.lessThanOrEqual(1, 2)).toBe(true)
    expect(compare.lessThanOrEqual(2, 1)).toBe(false)
  })
})
