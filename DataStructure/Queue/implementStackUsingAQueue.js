
function Test() {

  // Array.prototype.pop = () => { console.log(this[0]) }
  var stack = ['a', 'b', 'c']
  console.log(stack.pop())
  stack.push(90)
  console.log(stack.pop())

  Array.prototype.toUpper = function () {
    this.forEach(me => {
      console.log(me.toUpperCase())

    });
  }


  //Promise will not work in this case [this changes the contex] 
  // Array.prototype.toUpper = () => {

  //   this.forEach(me => {
  //     console.log(me.toUpperCase())

  //   });
  // }

  stack.toUpper()
}

Test()

function MyStack() {
  let q = new Queue
}

function Fibonacci(n) {

  Array.prototype.top = function () {
    if (this && this.length > 0) {
      return this[this.length - 1]
    }
  }

  Array.prototype.print = function () {
    this.forEach(me => {
      console.log(`[${me}]`)
    });
  }

  if (n < 1)
    return 0

  let sum = 0, top = 1, result = [0, 1]

  for (let i = 0; i < n; i++) {
    result.push(sum + top)
    sum = top
    top = result.top()
  }
  result.print()

}
Fibonacci(20)