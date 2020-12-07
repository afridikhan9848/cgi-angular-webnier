class Employee
{
    // properties
    //instance variables
    firstName: string;
    lastName: string;
    email: string;
//variables which are defined within method parameters are called local variables
    createEmployee(firstName: string, lastName: string, email:string): string
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        return "employee created successfully"
    }

    displayEmployee():void
    {
        console.log(`First Name: ${this.firstName} Last Name: ${this.lastName} Email: ${this.email}`);
    }
}
//employee is a variable type of reference
let employee = new Employee();
console.log(employee.createEmployee('John', 'Doe','johndoe@gmail.com'));
console.log(employee.displayEmployee());
