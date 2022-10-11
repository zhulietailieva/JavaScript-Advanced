class Company{
    constructor(){
        this.departments=new Map();
    }
    addEmployee(name,salary,position,department){
        //validations
        let args=[name,salary,position,department];
        for (const argument of args) {
            if(argument=''||argument==undefined||argument==null){
                throw new Error("Invalid input!");
            }
        }
        if(salary<0){
            throw new Error("Invalid input!");
        }
        //valid eployee
        let newEmployee=new Employee(name,salary,position,department);
        if(!this.departments.has(department)){
        //should add the department and the employee
        }
        else{
            //should add the employee to the department
        }
        //return message
    }
    bestDepartment(){
        //TO-DO: Implement functionallity
    }
}
class Employee{
    constructor(name,salary,position,department){
        this.name=name;
        this.salary=salary;
        this.position=position;
        this.department=department;
    }
}
