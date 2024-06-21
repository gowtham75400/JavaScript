const { resolve } = require("path");

let count = true;

let countValue = new Promise(function(resolve,reject){
    if(count){
        resolve('<reslove> there is count value ')
    }else{
        reject('<reject> there is no count value ')
    }
})

console.log(countValue);