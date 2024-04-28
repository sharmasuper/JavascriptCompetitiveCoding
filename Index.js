function BankAccount(customerName,balance=0){             //this constructor function hamai iska object banana h
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance

    this.deposit = function (amount) {
        this.balance += amount
    }

    this.withdraw = (amount) =>{
        this.balance -= amount
    }
    
}

// const rakeshAccount  = new BankAccount("Rakesh K",1000)       // new yai constructor function sai new object banayaiga
// const johnAccount  = new BankAccount("John K") 

// console.log(rakeshAccount)
// console.log(johnAccount)
//  rakeshAccount.deposit(500)
//  rakeshAccount.withdraw(700)
// console.log(rakeshAccount)


const accountform = document.querySelector("#accountform")

const custumerName = document.querySelector("#custumerName")
const Balance = document.querySelector("#Balance")

//2nd below
const depositForm = document.querySelector("#depositForm")

const AccountNumber = document.querySelector("#AccountNumber")
const Amount = document.querySelector("#Amount")


//3rd withdraw
const WithDrawForm = document.querySelector("#WithdrawForm")

const AccountNumber2 = document.querySelector("#AccountNumber2")
const withDrawAmount = document.querySelector("#withDraw")




let  accounts = Array()
accountform.addEventListener('submit',(e)=>{
    e.preventDefault()
    let account = new BankAccount(custumerName.value,+Balance.value)
    //  accounts.push(account)
    accounts = [...accounts,account]
   
    console.log(accounts)
   
})



depositForm.addEventListener('submit',(e)=>{
    e.preventDefault()
   const account =    accounts.find((account)=>account.accountNumber === +AccountNumber.value)
   account.deposit(+Amount.value)
   console.log(accounts)
})


WithDrawForm.addEventListener('submit',(e)=>{
    e.preventDefault()
     const checkAccount = accounts.find((account)=>account.accountNumber === +AccountNumber2.value)
     checkAccount.withdraw(+withDrawAmount.value)
     console.log(checkAccount)
})





