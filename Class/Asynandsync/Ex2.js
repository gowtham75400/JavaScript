// function showTime(){
//     let dateTime = new Date();
//     let time = dateTime.toLocaleTimeString()

//     console.log(time)

//     let check = setTimeout(showTime,3000)
//     clearTimeout(check)
// }
// showTime()

let count = 0 ;

function increCount(){
    count += 1;
    console.log(count)

    let check = setTimeout(increCount,3000)
    if(count == 5){
        clearTimeout(check)
    }
}
// increCount()

//CallBack function

function greet(name,callback){
    console.log(`Hello ${name}`)
    callback()
}

function callMe(){
    console.log("callback");
}

// greet('john' , callMe)


//callback

// function greet(){
//     console.log('hello world');
// }

// function sayname(name){
//     console.log(`hello ${name}`);
// }

// setTimeout(greet,2000)
// sayname('ganesh')


function greet(name,callback){
    console.log('hello world');
    callback(name)
}

function sayname(name){
    console.log(`hello ${name}`);
}

setTimeout(greet,2000,'john',sayname)