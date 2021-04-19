

function test() {
  var o = {
    a: 2,
    f: function () {
      console.log(this.f.prototype)
      return this.a + 1
    }
  }

  var p = Object.create(o)

  p.a = 20

  console.log(p.f())

  console.log(p.f.prototype)
  console.log(typeof (o))
}
function makeNewObject() {
  // A:
  // {
  //   module_id: string
  //   time: number
  //   level: info | warning | error
  //   msg: string
  // }

  // B:
  // {
  //   id: string
  //   module_id: string
  //   module_name: string
  // }

  // C: {
  //   module_id: string
  //   time: number
  //   level: string
  //   msg: string
  // }

  // listA = []
  // listB = []

  var a = [{
    module_id: 1,
    time: 100,
    level: 'error',
    msg: 'this is an error bla bla'
  },
  {
    module_id: 2,
    time: 300,
    level: 'error',
    msg: 'this is an error bla bla bla'
  },
  {
    module_id: 3,
    time: 200,
    level: 'error',
    msg: 'this is an bla'
  }]


  var b = [{
    id: 300,
    module_id: 1,
    module_name: 'database error'
  }, {
    id: 301,
    module_id: 2,
    module_name: 'database error again'
  }, {
    id: 302,
    module_id: 3,
    module_name: 'error again and again'
  }]



  var c = { ...a[0], ...b[0] }

  // with following requirements:
  // 1. join on module_id
  // 2. msg in type C is concat of B.module_name whitespace A.msg
  // 3. remove records of level warning
  // 4. sort by time asc

  console.log(c)
}

makeNewObject()