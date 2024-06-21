// function greet(name){
//     console.log('hi ' + name);
// }
// greet()

// function factorial(n){
//     if(n==1)
//         return 1 

//     return n*factorial(n-1)

// }

// console.log(factorial(5));

// let arr = [2,4,6,7,9,10]

// let findnum =  function(arr){
//     let sum = 0;
//     for(let val of arr){
//         sum += val
//     }
//     return sum
// }

// console.log(findnum(arr));

// let arr = [2,3,4,5,6]

// let findsum = arr => {
//     let sum = 0;
//     for(let val of arr){
//         sum += val
//     } 
//     return sum
// }

// console.log(findsum(arr));

// let volume = function(l,b,h){
//     return l*b*h
// }

// let vol1 = (l,b,h) => {return l*b*h}

// console.log(vol1(2,4,5));

//for each 

// let arr1 = ['jjo','jaya','mani']

// arr1.forEach = (val) => console.log(val)

// function print(val){
//     console.log(val);
// }


// console.log(findProduct(4,7)) 

// function findProduct(a,b){
//     return a*b
// }


// console.log(findProduct)
// console.log(typeof findProduct)


// function greet(name){
//     console.log(`hi ${name}`);
// }
// greet('Gowtham')

// function factorial(n){
//     if (n==1)
//         return 1
//     return n*factorial(n-1)
// }
// console.log( factorial(5))

// let isEven = function(num){
//     // if(num%2==0){
//     //     return true
//     // }

//     return num%2==0 

// }

// console.log(isEven(8));

// let arr = [2,3,4,5,6]

// arr.forEach(val => {
//     let sum = 0;
//     sum += val
// })


// console.log(sum);


// let arr = [ 2, 3, 5, 6, 10]
// let findSum = function(arr){
//     let sum = 0
//     for(let val of arr){
//         sum += val
//     }
//     return sum
// }

// console.log(findSum(arr))


// let arr = [2,3,-2,-7,0]

// let finsum = arr.filter((sum) => {
//     return sum>=0
// })

// console.log(finsum + "positive");

// let arr = [2,4,5,6,9]
// let target = 10;

// let findnum = arr.map()

// let  arr1 = [2,4,9,-4,-3]

// let posnum = arr1.filter(val =>{
//     return val>=0 +"Positive"
// } )

// console.log(posnum);


// function customFilter(arr, fn) {
//     const filteredArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (fn(arr[i], i)) {
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// }

// let arr = [4,5,6,76]

// let ne = new Map()

// console.log(ne)


let s = "anagram"
let t = "nagaram"

let isAnagaram = function (s,t){
    let map = new Map()
    if(s.length != t.length)
        return false
    for(let i = 0 ; i < s.length ; i++){
        if(map[s[i]])
            map[s[i]]++
        else 
            map[s[i]] = 1
}   
        for(let i = 0 ; i<t.length ; i++){
            if(map[t[i]])
                map[t[i]]--
            else 
            return false
        }
        return true
    }
isAnagaram()