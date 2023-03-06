const array = ['chris', 'ugo', 'larry', 'himah']

function randomEntry(myArray) {
    let randomIndex = Math.random()*myArray.length
    randomIndex = Math.floor(randomIndex)
    console.log(randomIndex)
}