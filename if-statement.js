
const shouldSayHi = true

//=== compare both value and type
if (shouldSayHi === true) {
  console.log('Hi there!')
}

const myObject = []
const mySecondObject = myObject

if (myObject === mySecondObject) {
  console.log('equal objects')
}

if (124 !== 123 + 0.5) {
  console.log('not equal')
} else {

}

if (100 === 100) {
  console.log('equal')
}



const bankAccountBalance = 1
const costOfItem = 123
const hasCreditCard = true
const hasReachedCredit = false

if (bankAccountBalance >= costOfItem) {
  console.log('you can pay with cach')
} else if (hasCreditCard && !hasReachedCredit) {
  console.log('can pay with credit')
}
else { console.log('sorry can not purchase the item') }


const men = {
  mortal: true
}

const socrat = men

if (men.mortal == true) {
  console.log('All men are mortal')
}
if (socrat == men) {
  console.log('socrat is a man')
  console.log('therefore, socrat is mortal')
}

console.log(typeof (men))

// const Socrat = men

// console.log(`Socrat is ${Socrat.isMortal}`)

