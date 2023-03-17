
const gender = "boy"
let myStr = `Obi is a ${gender} and ` 
myStr += "Ada is a girl."

console.log(myStr)

let nameLength = myStr.length

console.log(nameLength)

function wordBlanks(adjective, noun, verb, adverb) {
    let sentence = ""
    sentence += `The ${adjective} ${noun} is ${verb} ${adverb}`
    console.log(sentence)
}

console.log(wordBlanks('big', 'dog', 'running', 'quickly'))

let array = [2, 3, 5, 6, 8]

const poppedArray = array.pop()

const shiftedArray = array.shift()

console.log(poppedArray)

console.log(shiftedArray)

array.push("last")

array.unshift('first')

console.log(array)

function subtract(a, b) {
    console.log(a-b)
}

subtract(7, 5)


let addFunction = (a, b) => {
    console.log(a+b)
}

addFunction(3, 7) 

let myGlobalVar = 20

const function1 = (arr, item) => {
    arr.push(item);
    return arr.shift()
}

let testArr = [1,2,3,4,5]

console.log(`Before ${testArr}`)
console.log(function1(testArr, 6))
console.log(`After ${testArr}`)


const testVal = (val) => {
    if (val === 12) {
    return true
    }; 
    return false
}

console.log(testVal(12))