let count = 0;

function cc(card) {
  switch(card) {
    case 1:
    case 2:
    case 3:
      count++;
      break;
    case 8:
    case 9:
    case "K":
      count--;
      break;
    }

    let holdbet = "Hold"
    if (count > 0 ) {
      holdbet = "Bet"
    }
    return `${count} ${holdbet}`
}

cc(2); cc(3); cc(1);

//console.log(cc(4))


let boy = {
  "name": "Leo",
  "age": 15,
  "hobbies": ["hockey", "baseball", "darts"]
}

let prop = "age"
boy[prop] = 21

function checkObj(checkProp) {
  if (boy.hasOwnProperty(checkProp)) {
    return boy[checkProp]
  } else {
    return "Not Found"
  }
}

//console.log(checkObj('song'))

let myCollection ={
  "101": {
    "album": "Coast to coast",
    "artist": "Westlife",
    "tracks": ["My love", "fool again", "green"]
  },
  "102": {
    "artist": "Timaya",
    "tracks": []
  },
  "103": {
    "album": "Tempatation",
    "artist": "P Square",
    "tracks": ["Beautiful Onyinye", "Testimony", "Reason with me"]
  },
  "104": {
    "album": "Animal Talk"
  }
}

let myCollectionCopy = JSON.parse(JSON.stringify(myCollection));

function updateRecords(id, prop, value) {
  if (value === "") {
    delete myCollection[id][prop];
  } else if (prop === "tracks") {
    myCollection[id][prop] = myCollection[id][prop] || [];
    myCollection[id][prop].push(value)
  } else {
    myCollection[id][prop] = value
  }
  return myCollection
}

//updateRecords("104", "tracks", "Zombie")

//updateRecords("104", "artist", "Fela")

//console.log(updateRecords("102", "artist", ""))


let given = "134726692873536337634537"
let myArray = given.split('').map(Number)
let oddNumbers = ""

  myArray.forEach(num)
    if (item % 2 !== 0) {
      oddNumbers.push(num)
    }
   
console.log(oddNumbers)