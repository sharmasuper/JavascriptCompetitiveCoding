class BankAccount {
    customerName;
    accountNumber;
    #balance = 0
    constructor (customerName,balance){
        this.customerName = customerName;
        this.accountNumber = Date.now()
        this.#balance = balance;
    }
    deposit(amount) {
        this.#balance  +=amount
    }
    withdraw(amount) {
        this.#balance -= amount
       }

//   setBalance (amount) {
//     //yaha validation bhi laga sktai h
//     if(isNaN(amount)){
//     //   console.error("amount is not valid")
//     throw new Error("amount not valid")
//     }
//     this.#balance = amount          //yaha sai hum #balance ko access karnia ka mthod banatai h
//   }

//   getBalance() {
//     return this.#balance;    //get or set functionmethod ki jagah get or set ka use karo
//   }
  set balance(amount) {
    if(isNaN(amount)){
        throw new Error("Amount is not a valid input")
    }
    this.#balance = amount
  }

 get balance(){
    return this.#balance
 }

}

class CurrentAccount extends BankAccount {
    constructor(customerName,balance){
        super(customerName,balance)
    }

    #calculateInterest(amount){
        console.log("calculateing interest")
    }

    takeBusinessLoan(amount) {
        this.#calculateInterest(amount)
        console.log('Taking business loan  ' + amount)
     }

}

const rakeshAccount = new CurrentAccount('Rakesh',2000)
//rakeshAccount.#balance = "hello"    //yaha hum ander ki chijo ko bahar sai change kar paa rahai h isliy hum Encapsulation process ka use karigai
//rakeshAccount.setBalance(500) //esai hum value change kar sktai h

//console.log(rakeshAccount)    //  _ is sembool sai hum smjtai h ki yai private field h

//console.log(rakeshAccount.getBalance())  // hum iskao esai get nahi kar sktai h isly hum iskai liy ek method banaygai

console.log(rakeshAccount.balance)  //hum get ko esai call kar sktai h
//set 
rakeshAccount.balance = 20  //esai set kar sktai h
console.log(rakeshAccount)

rakeshAccount.takeBusinessLoan()

//rakeshAccount.calculateInterest()  //hum chahtai h ki hum sirf issai takeBusinessLoan sai hi call karai to hami issai private banana hoga
                                  //isliy mai iskai aagai # lagauga
                                  
                                  
rakeshAccount.takeBusinessLoan()