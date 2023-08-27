// ************* class ********* (function constructor)

class User{
    static type = "Hello";
    constructor(option){
        this.name = option.name
        this.age = option.age
        this.job = option.job
    }
    sey(){
        console.log(`Hello ${this.name} `);
    }
    aaa(){
        console.log(`How are you ${this.name} `);
    }
}
// console.log(new User({
//     name: "Narek",
//     age: 18,
//     job: "Developer",
// }));

let user = new User({
    name: "Narek",
    age: 18,
    job: "Developer",
})
console.log(user);


let b = new User({
    name:"Arsen",
    age:25,
    job:"Mi ban"
})
b.sey()
b.aaa()
console.log(b);
// console.log(User.type);

// **********  classic class jarangum  ************************* */

// class Man extends User{
//     constructor(city){
//         super()
//         this.travel = city
//     }
// }
// console.log(new Man({name:"Vahan",age:33,job:"AAC"},"Italy"));


// class A{
//     constructor(option){
//         this.name = option.name
//         this.job = option.job
//     }
//     sey(){
//         console.log(`${this.name}y ${this.job} e `);
//     }
// }

// let a = new A({
//     name:"Narek",
//     job:"Dev",
// })






































































