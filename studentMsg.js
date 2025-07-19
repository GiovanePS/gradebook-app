const { getAverage } = require('./getAverage.js');
const { getGrade } = require('./getGrade.js');

/**
 * Generates a message for a student based on their grade, wheter they passed
 * or failed. Also sends a message of class average.
 *
 * @param {number[]} totalScores - Student's class scores.
 * @param {number} studentScore - The student score to check.
 * @returns {string} A message indicating if the student has a passing grade or not.
 */
function studentMsg(totalScores, studentScore) {
    const classAverage = getAverage(totalScores)
    const studentGrade = getGrade(studentScore)

    const msg = `Class average: ${classAverage}. Your grade: ${studentGrade}. `

    if (studentGrade === 'F') {
        return msg + 'You failed the course.'
    } else {
        return msg + 'You passed the course.'
    }
}

module.exports = { studentMsg };
