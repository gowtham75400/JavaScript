class User {
    
    static numuser = 0;
    constructor(name,age){
        this.name =name;
        this.age = age 
        User.numuser++
    }

    login(){
        console.log("User Login in " + this.name);
    }
    logout(){
        console.log("user logout" + this.name);
    }
    static displayusers(){
        console.log(
            "number of users" + User.numuser++
        );
    }
}

class Paid extends User{
    constructor(name,age){
        super(name,age)
        this.storage = 100;;
    }
    message(){
        console.log("You have storage" + user1.name );
    }
    login(){
        console.log("thank you  have" + this.storage );
    }
}

let user1 = new User('gowtham',22)
let user2 = new User('mani',22)
let user3 = new User('navin',22)
// console.log(user1);
// console.log(user2);
// console.log(user3);
// User.displayusers()
let Paid1 = new Paid("ravi",22,100) 
Paid1.message()
Paid1.login()
// user1.login()
// user1.logout()