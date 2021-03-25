//nested functions

//why use nested functions? privacy concerns?  declater global name spaces

//closures is an expression that bindes those expressions. inner function has access to outer function but not via versa
//variables in inner function are not accessible from ecternal function

//ex1
function squareAndMultiply(num1, num2) {
  function square(z) {
    return z * z
  }
  let result = square(num1) * square(num2)
  return result
}

console.log(`square and multiply result is: ${squareAndMultiply(2, 3)}`)


//ex2
function squareMultiplyAndAdd(num1, num2) {
  function square(z) {
    return z * z
  }
  function add(x) {
    return x + x
  }
  let result = square(num1) * add(num2)
  return result
}

console.log(`square multiply and add result is: ${squareMultiplyAndAdd(2, 3)}`)

const first = squareAndMultiply(4, 4)
const second = squareAndMultiply(10, 2)
const third = squareAndMultiply(2, 200)


console.log(`first: ${first} second ${second} third ${third}`)

//ex 3

function personFormatter(firstName, lastName, age) {
  function formatName(first, last) {
    return `${first} ${last}`
  }
  function createPersonObject(peronName, personAge) {
    return person = {
      name: peronName,
      age: personAge
    }
  }
  const formattedName = formatName(firstName, lastName)
  return createPersonObject(formattedName, age)
}

console.log(personFormatter('amme', 'mitnvizki', 100))


//ex 3.1 - doesnt work

// function personFormatter(firstName, lastName, age) {
//   function formatName(first, last) {
//     return `${first} ${last}`
//   }

//   const formattedName = formatName(firstName, lastName)
//   return () => {
//     return (person = {
//       name: formattedName,
//       age: age
//     })
//   }
// }

console.log(personFormatter('shurka', 'valkina', 98))


//es6 default values
function numberMultiplier(x, y) {
  x = x || 5
  y = y || 10
  return x * y
}
console.log(numberMultiplier(2))
console.log(numberMultiplier(4, 3))


//es6 default values
function numberMultiplier(x = 5, y = 10) {
  return x * y
}
console.log(numberMultiplier())

//es6 default values
function numberMultiplier(x = 5, y = 10) {
  return x * y
}
console.log(numberMultiplier())

//string splitter
function stringSplitter(str) {
  const strNew = str.split(" ")
  console.log(typeof (strNew))
  return strNew
}
console.log(stringSplitter(" how are you doing?"))



//ex
const bankAccount = {
  canSpendMoney: true,
  // hasCreditCard: true,
  balance: 100
}

function purchaseItem(price, acct = bankAccount) {
  if (acct.canSpendMoney) {
    acct.balance -= price
    if (acct.balance <= 0) {
      acct.canSpendMoney = false
    }
    return true
  }
  else {
    return false
  }

}
console.log(purchaseItem(10))
console.log(bankAccount)
console.log(purchaseItem(1))

//pass object as argument
console.log(purchaseItem(1, { canSpendMoney: true, balance: 40 }))


//ex arguments
function logAllArguments(x, y, z) {
  console.log(arguments)
}
logAllArguments(1, 2, 3) //creates an object

//ex arguments
function logAllArguments2(x, y) {
  console.log(arguments)
}
logAllArguments2(4, 5, 6, 7, 7) //prints them all

//ex only one
function logAllArguments3(x, y, z) {
  console.log(`length: ${logAllArguments3.length}`)
}
logAllArguments3(1, 2, 3, 4) // will print 3

///???????????????????????????
//slice unexpected arguments from expacted arguments
//tell function to expect only 1 parameter (x)
function logAllArguments4(x) {

  //call array method on someyhing that is not an array...
  //slice is an aray method 
  const args = Array.prototype.slice.call(arguments, logAllArguments4.length)
  console.log(`args: ${args}`)

  console.log(typeof (args)) //object... why not array?
}

logAllArguments4(6, 7, 6, 8, 4, 5, 5, 6) // will print all arguments except  the first (6)s


function logAllArguments5(x) {

  //call array method on someyhing that is not an array...
  //slice is an aray method 
  const args = Array.prototype.slice.call(arguments, logAllArguments4.length)
  console.log(`args: ${args}`)

}

logAllArguments5("hi", "hello", "how are you?") // will print all arguments except  the first (6)s

function logAllArguments6(x) {

  //call array method on someyhing that is not an array...
  //slice is an aray method 
  const args = Array.prototype.slice.call(arguments, logAllArguments4.length)
  console.log(`args: ${args.sort()}`)

}

logAllArguments6(10, 3, 1, 5, 6, 7, 4, 5) // will sort all (will not print 10 because of slice)

//ex rest parameters?

function logAllArguments7(x, ...nums) {
  console.log(nums)
}
logAllArguments7(10, 4, 6, 7, 4, 88, 7, 3)// print ...nums only



function logAllArguments7(x, ...nums) {
  console.log(nums.sort(), `num length: ${nums.length}`)
}
logAllArguments7(10, 4, 6, 7, 5, 88, 7, 3)// print ...nums only


//ex map: multiply and sort array with first argument 
function multiply(multiplier, ...nums) {

  console.log(nums.map((n) => n * multiplier).sort())

}
multiply(10, 1, 2, 5, 4, 3, 9)


//#region 
//HomeworkAssignment 4
const man = {
  name: 'Socrat',
  mortal: true
}

function isMortal(name) {
  if (!name || typeof (name) !== 'string') { console.log('The name parameter you passed is not valid. Please try again') }
  else if (name == man.name) { return true }
  else { return false }
}
//#endregion