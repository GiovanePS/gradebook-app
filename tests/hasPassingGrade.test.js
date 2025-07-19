const Errors = require('../errors.js')
const { hasPassingGrade } = require('../hasPassingGrade')

describe('hasPassingGrade', () => {
    test('returns correct grade for boundary passing scores', () => {
        const minimalPassingScore = 60
        expect(hasPassingGrade(minimalPassingScore)).toBe(true)

        const minimalFailingScore = 59
        expect(hasPassingGrade(minimalFailingScore)).toBe(false)
    })

    test('throws error for non-numeric input', () => {
        const invalidInputs = ['a', {}, [], null, undefined]
        invalidInputs.forEach(input => {
            expect(() => hasPassingGrade(input)).toThrow(Errors.INVALID_INPUT('expected a numeric score.'))
        })
    })

    test('throws error for NaN input', () => {
        expect(() => hasPassingGrade(NaN)).toThrow(Errors.INVALID_INPUT('expected a numeric score.'))
    })
})
