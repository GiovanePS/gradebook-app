/**
 * @file index.js
 * @description Just for my testing purposes.
 */

const { studentMsg } = require('./studentMsg.js')

function main() {
    const scores = [100, 100, 100]
    const studentScore = 100
    const msg = studentMsg(scores, studentScore)
    console.log(msg)
}

main()
