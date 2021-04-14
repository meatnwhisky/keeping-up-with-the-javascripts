var count = 0
var managerId
var busiestManager = 0
var maxEmployees


var m1, m2, m3, m4, m5, m6, managers = []


async function createOrganization() {

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
    emp1.id = 11

    var emp2 = new Employee
    emp2.id = 22

    var emp3 = new Employee
    emp3.id = 33

    var emp4 = new Employee
    emp4.id = 44

    var emp5 = new Employee
    emp5.id = 55
    var emp6 = new Employee
    emp6.id = 66

    m1 = new Manager
    m1.id = 1
    m1.employees.push(emp2, emp3)

    m2 = new Manager
    m2.id = 2
    m2.employees.push(emp1)

    m4 = new Manager
    m4.id = 4
    m4.employees.push(m1)
    m4.employees.push(m2)

    m7 = new Manager
    m7.id = 7
    m7.employees.push(emp6)

    m6 = new Manager
    m6.id = 6
    m6.employees.push(emp5)


    m5 = new Manager
    m5.id = 5
    m5.employees.push(emp4)
    m5.employees.push(m6)
    m5.employees.push(m7)

    m3 = new Manager
    m3.id = 3
    m3.employees.push(m4)
    m3.employees.push(m5)

    m3.employees.forEach(emp => {
        // if (emp.employees !== null)
        //     console.log(`id: ${emp.id} -- employees ${emp.employees}`)
    });
    // console.log(m3.employees[0])
    // var c = 0
    // var ccc = await countEmployees(m3, c).then(
    //     console.log(ccc))

    managers = [m1, m2, m3]
}



async function countEmployees(E) {
    //employee
    if (E.employees === 'undefined' || E.employees == null) {
        console.log('count' + count)
        console.log('\n return 0')
        return 0
    }
    //manager
    else {
        //    console.log('length:' + E.employees.length)
        count += E.employees.length

        for (const ind in E.employees) {

            if (Object.hasOwnProperty.call(E.employees, ind)) {
                const emp = E.employees[ind];
                countEmployees(emp)
                // console.log('id:', emp.id, 'count:', count)
            }
            /*JavaScript does not protect the property name hasOwnProperty; thus, if the possibility exists that an object might have a property with this name, it is necessary to use an external hasOwnProperty to get correct results:*/
        }

    }
    //doesn't work:
    // else {
    //     console.log('length:' + E.employees.length)
    //     count += E.employees.length

    //     E.employees.forEach(async emp => {
    //         console.log('id:', emp.id, 'count:', count)
    //         await countEmployees(emp, count)
    //     })
    // }
}


createOrganization()

var managers = [m4, m5]

maxEmployees = 0
managers.forEach(manager => {
    count = 0
    countEmployees(manager)
    if (count > maxEmployees) {
        maxEmployees = count
        busiestManager = manager.id
    }
})
console.log(`maxEmployees ${maxEmployees} | busiest manager id: ${busiestManager}`)

// countEmployees(m3)

// console.log(count)


//not necessary 

// setTimeout(() => {
//     countEmployees(m3, 0)
// }, 5000);


// setTimeout(() => {
//     console.log(count)
// }, 5000);
