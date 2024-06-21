// let json1 =`[
// {
//     "name":"Gowtham",
//     "age":20,
//     "ism":false
// },
// {
//     "name":"Navin",
//     "age":20,
//     "ism":false
// }

// const { json } = require("node:stream/consumers");

// ]`

// let parsed = JSON.parse(json1)
// console.log(parsed[1]);

fetch('https://official-joke-api.appspot.com/jokes/random')
.then(res => res.json())
.then((randoms) => {
    let see = " "
        see +=
        `<cmdy>
        <span>ID : ${randoms.id}</span>
        <span>Type :${randoms.type}</span>
        <span>PunchLine${randoms.punchline}</span>
        <span>Setup : ${randoms.setup}</span>
        </cmdy>`

        document.getElementById("Classic").innerHTML += see
    })
.catch(err => console.log(err));
