const man = {
  name: 'Socrat',
  mortal: true
}

function isMortal(name) {
  if (!name || typeof (name) !== 'string') {
    console.log('The name parameter you passed is not valid. Please try again')
    return false
  }
  else if (name === man.name) { return true }
  else { return false }
}

console.log(isMortal('Socrat')) // true
console.log(isMortal('Aimee')) // false
console.log(isMortal(5))//The name parameter you passed is not valid. Please try again
console.log(isMortal())//The name parameter you passed is not valid. Please try again
