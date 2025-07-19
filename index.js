/**
 * @file index.js
 * @description Just for my testing purposes.
 */

const { getAverage } = require('./getAverage.js')

function main() {
    const scores = [0, 1, NaN]
    const average = getAverage(scores)
    console.log(`The average score is: ${average}`)
}

main()
