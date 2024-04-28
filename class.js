class BankAccount {
    customerName;
    accountNumber;
    balance = 0  ;       //hum yaha bhi bhi default parameter dai sktai h or 
                         //in parameter ko call karvanai kai liy hum constructor ka use karaigai
    constructor (customerName,balance=0) {
        this.customerName = customerName;
        this.accountNumber = Date.now()
        this.balance = balance
    } 
    //function add karna
    
    deposit(amout){
        this.balance += amout
    }
    withdraw(amount){
        this.balance -= amount
    }
}

// BankAccount.prototype.withdraw = function(amount){
//            this.balance -= amount                             ///esa bhi kar sktai
// }

const rakeshAccount = new BankAccount("Rakesh khandal",30000)
console.log(rakeshAccount)
rakeshAccount.deposit(500)
console.log(rakeshAccount)
rakeshAccount.withdraw(4000)
console.log(rakeshAccount)







