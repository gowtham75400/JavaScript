const user = {
    name : 'Kiran Kumar',
    username : 'Kiran',
    password : 'password:)',

    login: function(username, password){
        if(this.username == username && this.password){
            console.log('login success')
        }
        else{
            console.log('authentication failed')
        }
    }
}
user.login('Kiran','password');
user.login('Kumar','password');