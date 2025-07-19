const Errors = require('./errors.js')
const { getGrade } = require('./getGrade.js')

/**
 * Checks if a given score is a passing grade.
 * Any score of 60 (F letter), or above is considered passing.
 *
 * @param {number} score - The score to check.
 * @returns {boolean} true if the score is 60 (F) or above, false otherwise.
 */
function hasPassingGrade(score) {
    if (typeof score !== 'number' || isNaN(score)) {
        throw new Error(Errors.INVALID_INPUT('expected a numeric score.'))
    }

    const letter = getGrade(score)
    return letter !== 'F'
}

module.exports = { hasPassingGrade }
