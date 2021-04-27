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