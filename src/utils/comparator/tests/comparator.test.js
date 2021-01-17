import Comparator from '../comparator'

describe('Default compare function tests', () => {
  it('should use the class\'s compare function for equality comparison', () => {
    const compare = new Comparator()

    expect(compare.equal(2, 1)).toBe(false)
    expect(compare.equal(1, 2)).toBe(false)
    expect(compare.equal(1, 1)).toBe(true)
    expect(compare.equal('test123', 'test321')).toBe(false)
    expect(compare.equal('test123', 'test123')).toBe(true)
  })

  it('should use the class\'s compare function for lessThan comparison', () => {
    const compare = new Comparator()

    expect(compare.lessThan(1, 1)).toBe(false)
    expect(compare.lessThan(2, 1)).toBe(false)
    expect(compare.lessThan(1, 2)).toBe(true)
    expect(compare.lessThan(-5, -3)).toBe(true)
    expect(compare.lessThan('test', 'test')).toBe(false)
    expect(compare.lessThan('test123', 'test')).toBe(false)
    expect(compare.lessThan('test', 'test123')).toBe(true)
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

    expect(compare.lessThanOrEqual(2, 1)).toBe(false)
    expect(compare.lessThanOrEqual(1, 1)).toBe(true)
    expect(compare.lessThanOrEqual(1, 2)).toBe(true)
  })

  it('should use the class\'s compare function for greaterThan or quality comparison', () => {
    const compare = new Comparator()

    expect(compare.greaterThanOrEqual(0, 1)).toBe(false)
    expect(compare.greaterThanOrEqual(1, 1)).toBe(true)
    expect(compare.greaterThanOrEqual(1, 0)).toBe(true)
  })
})

describe('Custom compare function tests', () => {
  it('should use the custom compare functino for equality comparison', () => {
    const compare = new Comparator(customCompare)

    expect(compare.equal('a', 'b')).toBe(true)
  })
})

const customCompare = (value1, value2) => {
  if (value1.length === value2.length) {
    return 0
  }

  if (value1.length < value2.length) {
    return -1
  } else {
    return 1
  }
}
