class Abstract{
    #password;
    email;
    name;

    constructor(){

    }

    #validateEmail(email){
        return true;
    }
    #validatePassword(password){
        return true;
    }

    signUp(name,email,password){
        let isValidate = false;

        isValidate = this.#validateEmail(email);

        isValidate = this.#validatePassword(password);

        if(isValidate){
            this.name=name;
            this.email=email;
            this.#password = password;
            console.log("Registration successful");
        }
        else{
            console.log("Please enter =correct details!");
        }
    }
}



