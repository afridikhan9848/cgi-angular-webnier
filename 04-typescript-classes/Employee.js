var Employee = /** @class */ (function () {
    function Employee() {
    }
    //variables which are defined within method parameters are called local variables
    Employee.prototype.createEmployee = function (firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        return "employee created successfully";
    };
    Employee.prototype.displayEmployee = function () {
        console.log("First Name: " + this.firstName + " Last Name: " + this.lastName + " Email: " + this.email);
    };
    return Employee;
}());
//employee is a variable type of reference
var employee = new Employee();
console.log(employee.createEmployee('John', 'Doe', 'johndoe@gmail.com'));
console.log(employee.displayEmployee());
