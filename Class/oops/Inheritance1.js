class User {
    #password;
    email;
    name;

    signUp(name, email, password) {
        this.name = name;
        this.email = email;
        this.#password = password;;
    }

    login(username, password) {
        if (this.username === username && this.#password === password) {
            console.log('login successful');
        } else {
            console.log("authentication failed");
        }
    }
}

class Author extends User {
    #noOfPosts;

    constructor(email, pass) {
        super(email, pass);
        this.#noOfPosts = 0;
    }

    createPost() {
        this.#noOfPosts++;
    }

    getPost() {
        return this.#noOfPosts;
    }
}

class Admin extends User {
    constructor(email, pass) {
        super(email, pass);
    }

    removeUser() {
        console.log("user Removed Successfully");
    }
}

const admin1 = new Admin('dsfs@gmail.com', 'fff333');
const admin2 = new Admin('admin2@gmail.com', 'adm321');
admin1.removeUser();

const author1 = new Author('author@gmail.com', 'auth3322');
author1.createPost();
console.log(author1.getPost());