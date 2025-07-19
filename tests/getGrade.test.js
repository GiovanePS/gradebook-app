const Errors = require('../errors.js')
const { getGrade } = require('../getGrade.js')

describe('getGrade', () => {
    test('returns the correct letter grade', () => {
        const grades = [
            { score: 100, letter: 'A++' },
            { score: 99, letter: 'A' },
            { score: 90, letter: 'A' },
            { score: 89, letter: 'B' },
            { score: 80, letter: 'B' },
            { score: 79, letter: 'C' },
            { score: 70, letter: 'C' },
            { score: 69, letter: 'D' },
            { score: 60, letter: 'D' },
            { score: 59, letter: 'F' },
            { score: 50, letter: 'F' },
            { score: 0, letter: 'F' },
        ]

        grades.forEach(({ score, letter }) => {
            expect(getGrade(score)).toBe(letter)
        })
    })

    test('throws error for a negative score', () => {
        const negativeScore = -1
        expect(() => getGrade(negativeScore)).toThrow(Errors.INVALID_INPUT('expected a number between 0 and 100'))
    })

    test('throws error for a score greater than 100', () => {
        const scoreGreaterThan100 = 101
        expect(() => getGrade(scoreGreaterThan100)).toThrow(Errors.INVALID_INPUT('expected a number between 0 and 100'))
    })

    test.each([
        'a', {}, [], null, undefined
    ])('throws error for non-numeric input: %p', (input) => {
        expect(() => getGrade(input)).toThrow(
            Errors.INVALID_INPUT('expected a number between 0 and 100')
        )
    })

    test('throws error for NaN input', () => {
        expect(() => getGrade(NaN)).toThrow(Errors.INVALID_INPUT('expected a number between 0 and 100'))
    })
})
