/**
 * This function calculates the average of an array of scores.
 *
 * @param {number[]} scores - Array of numeric scores.
 * @returns {number} the average score.
 */
function getAverage(scores) {
    const len = scores.length
    if (len === 0) {
        return 0
    }

    const average = scores.reduce((acc, score) => acc + score, 0) / len
    if (isNaN(average)) {
        throw new Error('Invalid input: expected an array of numbers')
    }

    return average
}

module.exports = { getAverage }
