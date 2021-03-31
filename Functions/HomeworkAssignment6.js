
for (let x = 1; x <= 100; x++) {
  if (isPrime(x)) {
    console.log('Prime |', x)
  }
  else if (x % 3 === 0 && x % 5 === 0) {
    console.log('FizBuz |', x)
  }
  else if (x % 3 === 0) {
    console.log('Fiz |', x)
  } else if (x % 5 === 0) {
    console.log('Buz |', x)
  }
  else { continue }
}

function isPrime(num) {
  if (num === 1) { return true }
  for (let i = 2; i <= 9; i++) {
    if (num === i) {
      continue
    }
    if (num % i == 0)
      return false
  }
  return true
}