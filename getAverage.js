const Errors = require("./errors")

/**
 * This function calculates the average of an array of scores.
 *
 * @param {number[]} scores - Array of numeric scores.
 * @returns {number} the average score.
 */
function getAverage(scores) {
    if (!Array.isArray(scores)) {
        throw new Error(Errors.INVALID_INPUT('expected an array of scores.'))
    }

    const len = scores.length
    if (len === 0) {
        return 0
    }

    const average = scores.reduce((acc, score) => acc + score, 0) / len
    if (isNaN(average)) {
        throw new Error(Errors.INVALID_INPUT('expected scores must be numeric values.'))
    }

    return average
}

module.exports = { getAverage }
