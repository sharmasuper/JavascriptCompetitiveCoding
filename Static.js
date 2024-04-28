 console.log("hello")
// //yaha hum utility function mai kasai static ka use krtai h vo dekaigai

// //increment
// // let id = 1  
class user {
    static id = 1;

     static cache = {
       1 : 'some value'
     }

    constructor (name,age,income) {
        this.name = name;
        this.age = age;
        this.income = income;
        // this.id = id++;
        this.id = user.id++
    }
    // checkCache (){
    //    // console.log(this.cache)
    //    console.log(user.cache)
    // }

    //  static checkCache () {
    //     console.log(this.cache)
    //  }

static {
    console.log('Initilalized')   //esai hum block bhi bana sktai static method call hoga to yai bhi call hoga
}

    //yaha hum dekai gai ki static property or method kaha kaha access hotai h

    static hasInCache() {
        console.log(user.cache)
       // this.checkCache()
        // console.log(this.cache) //yai this tabhi kam karai jab static method sai static property access kar rahai ho
   
    }
    // static compareByAge(user1,user2){
    //     return user1.age - user2.age;
    // }
    // static compareByincome(user1,user2){
    //     return user1.income - user2.income;
    // }
}

//user.hasInCache()   //yaha dekai gai to object lock ho jayga
//    const user1 = new user("Rakesh",30,500)
//    user1.hasInCache()  //error show
user.hasInCache()

// const user1 = new user("Rakesh",30,5000)   // yai static method hotai h unko mai user1(istance) kai sath use nahi kar sktai
//                                          //kayoki static method ka user1 ka koi relation nhi h
//                                          //static method or property class kai uper store ho jati h or normal property vo istance(user1) mai store ho jati h
// const user2 = new user("John",40,10000)
// const user3 = new user("Ram",20,7000)

// mai chahtaha hu ki mai inhai age sai sort karu
// const users = [user1,user2,user3]

// users.sort((a,b)=>a.age - b.age);
                //yai jo sorting h yai user sai related h mai chahta hu ki user kai ander yai jo method(sort ka) h unko store karai
// users.sort(user.compareByAge)
// users.sort(user.compareByincome)
// console.log(user1)
// console.log(user2)  //yaha id increase to hoti h but yai annti pattern
// console.log(user3)


//configuration 

// class Config {
//       static dbUser = 'username'
//       static dbPassword = 'secret'
//       static apiToken = 'abcd'


// }

// // const config = new Config()
// console.log(Config.apiToken)


console.log("hello")


