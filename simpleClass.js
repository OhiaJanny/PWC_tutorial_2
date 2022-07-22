//object oriented project is the modelling of software creation where programs and softwares are seen as real word ProjectnEventan object is anything that has properties and functions
//eg human ByteLengthQueuingStrategyproperties of humainheing are innerHeight, legs,hands
//fuctions of a humanbeing include walking, teaching
//methods are functions that are attached to an object


class Student{
    constructor(firstName,lastName,dob){
        this.firstName= firstName;
        this.lastName=lastName;
        this.dob= new Date(dob);
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
    getbirthYear(){
        return this.dob.getFullYear();
    }
}

const Kamaldeen= new Student (`Kamaldeen`,`Abdulkadir`,`June 6 2003`);
console.log(Kamaldeen);

