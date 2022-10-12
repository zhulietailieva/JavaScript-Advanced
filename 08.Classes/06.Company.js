class Company{
    constructor(){
        this.departments=new Map();
    }
    addEmployee(name,salary,position,department){
        //validations
        let args=[name,salary,position,department];
        for (const argument of args) {
            if(argument==''||argument==undefined||argument==null){
                throw new Error("Invalid input!");
            }
        }
        if(salary<0){
            throw new Error("Invalid input!");
        }
        //valid eployee
        let newEmployee=new Employee(name,salary,position,department);
        if(!this.departments.has(department)){
            this.departments.set(department,[newEmployee]);
        //should add the department and the employee
        }
        else{
            this.departments.get(department).push(newEmployee);
            //should add the employee to the department
        }
       return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    bestDepartment(){
        let bestDepartment;
        let bestDepartmentName;
        let highestAverageSalary=-1;
        console.log(this.departments.entries());
        for (const item of this.departments.entries()) {
            
            let currValues=item.values();
           // console.log(currValues);
            let sum=0;
            let c=0;
            console.log(currValues);
            //employees not working?

            for (const employee of currValues) {
                // console.log(employee);
                // console.log(this.employee.salary);
                // sum+=employee.salary;
                c+=1;
            }
            let averageSalary=sum/c;
            if(averageSalary>highestAverageSalary){
                bestDepartment=item;
                highestAverageSalary=averageSalary;
                bestDepartmentName=item.keys();
            }
        }
        //sort employees by 2 criteria
        let res='';
        res+=`Best Department is: ${bestDepartmentName} \n`;
        res+=`Average salary: ${highestAverageSalary.toFixed(2)}\n`;
       // console.log(bestDepartment);
        let employeesSorted=(Array.from(bestDepartment)).sort((a,b)=>
        b.salary-a.salary==0? a.name.localeCompare(b.name):b.salary-a.salary);
        for (const employee of employeesSorted) {
           res+=(`${employee.name} ${employee.salary} ${employee.position}\n`)
        }
       return res;
    }
}
class Employee{
    constructor(name,salary,position,department){
        this.name=name;
        this.salary=Number(salary);
        this.position=position;
        this.department=department;
    }
}
//test
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());