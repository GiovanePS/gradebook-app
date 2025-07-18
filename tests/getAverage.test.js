const { getAverage } = require('../getAverage.js');

describe('getAverage', () => {
    test('returns the correct average properly', () => {
        expect(getAverage([55, 32, 66])).toBe(51);
    })

    test('returns 0 for an empty array', () => {
        expect(getAverage([])).toBe(0);
    })

    test('throws error for invalid input values', () => {
        const invalidInputs = [
            [1, 2, 'invalido'],
            [NaN, 3, 4],
            [{}, [], 5],
            ['a', 'b', 'c'],
        ];

        invalidInputs.forEach(input => {
            expect(() => getAverage(input)).toThrow('Invalid input: expected an array of numbers');
        });
    });
})
