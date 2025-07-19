const { studentMsg } = require('../studentMsg.js')
const { getAverage } = require('../getAverage.js')
const { getGrade } = require('../getGrade.js')

describe("studentMsg", () => {
    it("should return a message indicating the student passed", () => {
        const scores = [83, 99, 1]
        const studentScore = 99
        const expectedMessage = `Class average: ${getAverage(scores)}. Your grade: ${getGrade(studentScore)}. You passed the course.`

        expect(studentMsg(scores, studentScore)).toBe(expectedMessage)
    })

    it("should return a message indicating the student failed", () => {
        const scores = [50, 60, 70]
        const studentScore = 40
        const expectedMessage = `Class average: ${getAverage(scores)}. Your grade: ${getGrade(studentScore)}. You failed the course.`

        expect(studentMsg(scores, studentScore)).toBe(expectedMessage)
    })
})
