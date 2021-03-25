
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