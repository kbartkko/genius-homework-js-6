// процедурне програмування

// const summ = 20000;
// const month = 12;
// const p = 1000;

// const credit = (sum, date, p) => {
//   return sum + p * date;
// };

// console.log(credit(summ, month, p));

// об*єктно орієнтоване програмування

// const credit = {
//   summ: 20000,
//   month: 12,
//   p: 1000,
//   result() {
//     return this.summ + this.p * this.month;
//   },
// };

// console.log(credit.result());

//класи

// class Bank {
//     static type = "Privat";
//     constructor(options){
//         this.suum = options.summ;
//         this.month = options.month;
//         this.p = options.p;
//     }

//     credit() {
//         return console.log("I am Privat bank");
//     }
// }

// const userBank = new Bank({
//     summ: 30000,
//     month: 5,
//     p: 500,
// }) 
// console.log(Bank.type);
// userBank.credit();

// class NewBank extends Bank {
//     constructor(options) {
//         super(options);
//         this.card = options.card;
//     };
//     credit() {
//         super.credit();
//         console.log("I am Aval bank");
//     }
// }


// const aval = new NewBank({
//     summ: 30000,
//     month: 5,
//     p: 500,
//     card: true,
// })


// console.log(aval.credit());


// get & set

// class User {
//     constructor(props) {
//         this.name = props.name;
//     }
    
//     firstName = "";
//     lastName = "";
//     age = "";
//     city = "";

//     set name(newName) {
//         const nameRow = newName.split(" ");
//         this.firstName = nameRow[0];
//         this.lastName = nameRow[1];
//     }


//     get name() {
//         return `First name : ${this.firstName} last name : ${this.lastName}`;
//     }
// }
// const Kate = new User({
//     name: 'Kateryna Bartko',
// })
 
// console.log(Kate);


// const Ihor = ({
//     name: 'Ihor Bartko',
// })

// console.log(Ihor);

// const a = [1, 2, 3];
// console.log(a);

// const a = {
//     x: 1,
//     y:2,
// }


// const b = Object.create(a);
// console.log(b.x);



// const Manager = function (name, sales) {
//     this.name = name;
//     this.sales = sales;

 
// };

// const Ann = new Manager("Anna", 5);
// const Ivan = new Manager("Ivan", 10);



// Manager.prototype.sale = function () {
//     this.sales += 1;
// }

// // console.log(Ann.sales);
// // Ann.sale();
// // console.log(Ann.sales);

// console.dir(Manager);

// class CoffeMachine {
//     _water = 0;
//     constructor(power) {
//         this.power = power;
//     }

//     set waterAmount(value) {
//         if (value < 0) {
//             value = 0;
//         }
//         this._water = value;  
//     }
// }

// let coffeeMachine = new CoffeMachine(100);
// console.log(coffeeMachine);

// coffeeMachine.waterAmount=-20;
// console.log(coffeeMachine);