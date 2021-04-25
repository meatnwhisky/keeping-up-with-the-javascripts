
/*
Destructuring is a pattern in es6 that allows to convert spread an array or an object to a separated fields and via versa
Destructuring array: will pull array elements into separated objects or will set an new array from separated objects.
Destructuring object: pulls object fields into distinct variables or can initialize an object using destructing pattern.
Its also possible to use default values set to object fields.
*/


const arrat = [1, 2, 3, 4, 5, 6] //array literal expression

//old way
const array = new Array()
array[0] = 1
array[1] = 2
array[2] = 3
array[3] = 4

//old way

const first = array[0]

//extract all elements to different variables
const [x, y, z, a] = array
console.log((a))

//-''-''
const array1 = ['anna', 'dimo', 'danda', 'kiki', 'alena']
let name1, name2, name3
[name1, name2, name3] = array1
console.log([name1, name2, name3])
console.log(name1, name2, name3)

function distractObject(obj) {
  // let user = { name: 'Mau', type: 'Member' }
  let { name = 'Anka', type } = obj //destruct to separate variables
  console.log(`${name}, ${type}`)
}
const obj = {
  type: 'Manager'
}

const obj1 = {
  name: 'Alenka', type: 'Manager'
}
distractObject(obj)

distractObject(obj1)


//________________________________


function distractObject1(obj) {


  let { a, b, c, d, e, f, g = 44 } = obj
  console.log(a, b, c, d, e, f, g)
}

const obj3 = {
  a: 1, b: 2, c: 3, d: 4, e: 5, f: 6
}
distractObject1(obj3)



function distractObject3({ prop: message, aii: message1 }) {
  console.log(message, message1)
}

distractObject3({ prop: 'heyaa!', aii: 'hola!' }) //expect exact prop name

distractObject3({ proop: 'heyaa!' }) //error :)



function distractObject4({ id: id }) {
  console.log(`user id is: ${id}`)
}

const user = { id: 99, name: 'alikiana' }
distractObject4(user)


function distractObject5({ name: n }) //name prop must be exactly as inside the object
{
  console.log(`user name is: ${n}`)
}
distractObject5(user)


function distractObject6({ name }) //name prop must be exactly as inside the object
{
  console.log(`user name is: ${name}`)
}
user.name = 'alonika'
distractObject6(user)

function constructObject({ name, id }, occupation) // modify the object: add occupation to it as a separated field
{
  const newOb = {
    name, id, occupation
  }
  console.log(newOb)
}
// user.occupation = 'programadora'

constructObject(user, 'programadora')