class Car {
    constructor(){

    }

    drive(){
        console.log("Dirving");
    }
}

function fillingGas(){
    console.log("fillingGas");
}

function repair(){
    console.log("reparing");
}

export default Car
export  {fillingGas,repair}