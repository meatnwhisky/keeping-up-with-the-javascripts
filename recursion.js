
function createOrganization() {

    function Employee() {
        this.id = ''
    }
    function Manager() {
        Employee.call(this)
        this.employees = []
    }

    Manager.prototype = Object.create(Employee.prototype)
    Manager.prototype.constructor = Manager

    var emp1 = new Employee
    emp1.id = 1

    var emp2 = new Employee
    emp2.id = 2

    var emp3 = new Employee
    emp3.id = 3

    var emp4 = new Employee
    emp4.id = 4

    var emp5 = new Employee
    emp5.id = 5
    var emp6 = new Employee
    emp6.id = 6

    var m1 = new Manager
    m1.id = 1
    m1.employees.push(emp2, emp3)

    var m2 = new Manager
    m2.id = 2
    m2.employees.push(emp1)

    var m4 = new Manager
    m4.id = 4
    m4.employees.push(m1)
    m4.employees.push(m2)

    var m7 = new Manager
    m7.id = 7
    m7.employees.push(emp6)

    var m6 = new Manager
    m6.id = 6
    m6.employees.push(emp5)


    var m5 = new Manager
    m5.id = 5
    m5.employees.push(emp4)
    m5.employees.push(m6)
    m5.employees.push(m7)

    var m3 = new Manager
    m3.id = 3
    m3.employees.push(m4)
    m3.employees.push(m5)

    m3.employees.forEach(emp => {
        if (emp.employees !== null)
            console.log(`id: ${emp.id} -- employees ${emp.employees}`)
    });
    // console.log(m3.employees[0])

    var count = 0

    count = findBusiestEmployee(m3, 0)
}

createOrganization()

function findBusiestEmployee(E, cnt) {
    console.log(E)

    if (E.employees == null || E.employees == undefined) {
        console.log(E.employees)
        return 0
    }
    else {
        E.employees.forEach(emp => {

            return count += findBusiestEmployee(emp, count)

        })
    }
}
var count = 0
createOrganization()
