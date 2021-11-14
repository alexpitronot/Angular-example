// @ts-check

let sentence_new = "We like to learn some Typescript"
console.log(example(sentence_new))

/** @param {any[]} arr */

// @ts-ignore
function example(arr) {
    if (arr.length >10)
    return arr.slice(0,10)
    return arr
}