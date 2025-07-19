const Errors = require("./errors")

/**
 * Converts a numeric score to letter score.
 * The scores and the corresponding letters are:
 *    - 100:   'A++'
 *    - 90-99: 'A'
 *    - 80-89: 'B'
 *    - 70-79: 'C'
 *    - 60-69: 'D'
 *    - 0-59:  'F'
 *
 * @param {number} score - the numeric scores (0-100).
 * @returns {string} grade score.
 * @example
 *      getGrade(85) // returns 'B'
 *      getGrade(95) // returns 'A'
 *      getGrade(100) // returns 'A++'
 */
function getGrade(score) {
    if (typeof score !== 'number' || score < 0 || score > 100 || isNaN(score)) {
        throw new Error(Errors.INVALID_INPUT('expected a number between 0 and 100'))
    }

    if (score === 100) {
        return 'A++'
    } else if (score >= 90) {
        return 'A'
    } else if (score >= 80) {
        return 'B'
    } else if (score >= 70) {
        return 'C'
    } else if (score >= 60) {
        return 'D'
    } else {
        return 'F'
    }
}

module.exports = { getGrade }
