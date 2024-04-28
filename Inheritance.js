//classes  kai ander inheritance ka use 

class BankAccount {
    customerName;
    accountNumber;
    balance = 0

   constructor (custumerName,balance =0) {
    this.customerName = custumerName;
    this.accountNumber = Date.now()
    this.balance = balance;

   }
   
   deposit(amount) {
    this.balance += amount
   }
   withdraw(amount) {
    this.balance -= amount
   }
}



class currentAccount extends BankAccount {
    transactionLimit = 5000

constructor (customerName,balance =0){
    super(customerName,balance);

}

 takeBusinessLoan(amount) {
    console.log('Taking business loan  ' + amount)
 }

}


class SavingAccount extends BankAccount {
    transactionLimit = 10000

    constructor (customerName,balance = 0) {
        super(customerName,balance);
    }
   TakePersonalLoan(amount) {
    console.log("Taking business Loan  " + amount)
   }

}



const rakeshAccount = new SavingAccount( "Rakesh",600)
console.log(rakeshAccount)

rakeshAccount.deposit(500)
rakeshAccount.withdraw(100)
rakeshAccount.TakePersonalLoan(20000)
console.log(rakeshAccount)

//function kai ander inheritance ka use 

function BankAccount (custumerName,balance = 0) {
   this.custumerName = custumerName;
   this.accountNumber = Date.now()
   this.balance = balance;
   
}

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount
}

BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount
}




//corrent account


// function currentAccount (custumerName,balance = 0) {
//     this.custumerName = custumerName;
//     this.accountNumber = Date.now()
//     this.balance = balance;
//     this.transactionLimit = 50000
//  }
 
//  currentAccount.prototype.takeBusinessLoan = function (amount) {
//     console.log("Taking business Loan"+amount)
//  }

//  currentAccount.prototype.deposit = function (amount) {
//     this.balance -= amount
// }

 
// currentAccount.prototype.withdraw = function (amount) {
//      this.balance -= amount
//  }

//  const rakeshAccount = new currentAccount("Rakesh khandal",500)
//  console.log(rakeshAccount)
 


// // const rakeshAccount = new BankAccount("Rakesh khandal",500)
// // console.log(rakeshAccount)

// function SavingAccount (custumerName,balance = 0) {
//     this.custumerName = custumerName;
//     this.accountNumber = Date.now()
//     this.balance = balance;
//     this.transactionLimit = 10000
//  }
 
//  SavingAccount.prototype.takePersonalLoan = function (amount) {
//     console.log("Taking Personal Loan"+amount)
//  }

//  SavingAccount.prototype.deposit = function (amount) {
//     this.balance -= amount
// }

 
// SavingAccount.prototype.withdraw = function (amount) {
//      this.balance -= amount
//  }

//  const rakeshAccount3 = new SavingAccount("Rakesh khandal",500)
//  console.log(rakeshAccount3 )
 
//bar bar function bananai sai rokanai kai liy hi hum inheritance ka use kartai h 
//ismai hum ek parent banai h or uskai ander child mai value assign kartai h


function CurrentAccount (custumerName,balance = 0) {
    BankAccount.call(this,custumerName,balance)
    this.transactionLimit = 50000
 }
 
 CurrentAccount.prototype = Object.create(BankAccount.prototype)

 CurrentAccount.prototype.takeBusinessLoan = function (amount) {
    console.log('Takeing Business Loan'+amount)
 }

const Mohit = new CurrentAccount("Mohit",400)
console.log(Mohit)


//Saving account

function SavingAccount (custumerName,balance = 0) {

     BankAccount.call(this,custumerName,balance)   //this likhnai sai savingAccount ka ek object bana dega

    this.transactionLimit = 10000
 }
 
//  SavingAccount.prototype = Object.create(BankAccount.prototype)

//  SavingAccount.prototype.takePersonalLoan = function (amount) {
//     console.log('Takeing personal Loan'+amount)
//  }

// const mohitAccount = new SavingAccount("Mohit",700)
// console.log(mohitAccount)

//  mohitAccount.deposit(1200)    // parent mai deposit function add karkai bhi ho skta h
//  console.log(mohitAccount)
//  mohitAccount.takePersonalLoan(20000)
//  console.log(mohitAccount)






