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