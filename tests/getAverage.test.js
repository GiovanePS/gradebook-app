const Errors = require('../errors.js')
const { getAverage } = require('../getAverage.js')

describe('getAverage', () => {
    test('returns the correct average', () => {
        const correctAverage = [55, 32, 66]
        expect(getAverage(correctAverage)).toBe(51)
    })

    test('returns 0 for an empty array', () => {
        const emptyArray = []
        expect(getAverage(emptyArray)).toBe(0)
    })

    test('throws error for non-array input', () => {
        const nonArrayInputs = [1, 'string', {}, null, undefined]
        nonArrayInputs.forEach(input => {
            expect(() => getAverage(input)).toThrow(Errors.INVALID_INPUT('expected an array of scores.'))
        })
    })

    test.each([
        [[1, 2, 'invalido']],
        [[NaN, 3, 4]],
        [[{}, [], 5]],
        [['a', 'b', 'c']],
        [[null, undefined, 6]],
    ])('throws error for invalid input value: %p', (input) => {
        expect(() => getAverage(input)).toThrow(
            Errors.INVALID_INPUT('expected scores must be numeric values.')
        )
    });
})
