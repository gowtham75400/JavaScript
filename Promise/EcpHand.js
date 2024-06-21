try{
    num = prompt("Enter a Number")
    if(num<10)
        throw "Enter num less than 10"
    // if(num=="")
    //     throw "Enter any nymber"
    // if(isNaN(num))
    //     throw "Enter a valid number"
}
catch(error){
    console.log(error);
}
finally{
    console.log("bye");
}