// @ts-check

let sentence = "We like to learn some Typescript"
// @ts-ignore
console.log(example(sentence))

/** @param {any[]} arr */

function example(arr) {
    if (arr.length >10)
    return arr.slice(0,10)
    return arr
}