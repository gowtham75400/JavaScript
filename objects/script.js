// let item = {
//     name:'phone',
//     price:23000,
//     quantity:2,
//     categories:['electronics','phones'],
//     dimensions:{
//         length:7,
//         breath:3.5,
//         height:5
//     }
// }

// console.log(item)
// console.log(item.categories.length)

// //another way to create object
// let item2 = new Object();

// item2.name = 'charger'
// item2.price = 9000
// item2.quantity = 1 

// console.log(item2)

// //accessing object
// //dot notation
// console.log(item.price)
// item.price = 22000
// console.log(item.price)

// item.returnable = true
// console.log(item)

// //square bracket notation
// console.log(item['price'])
// item['returnable'] = false

// let key = 'price'
// item[key] = 27100
// item.key = 800 // doesn't work
// console.log(item)


// item = {
//     name:'phone',
//     price:23000,
//     quantity:2,
//     buy:function(){  // where inside the object => function called method and ouside the object => function called function
//         console.log("item added to cart")
//     },
//     addtolist(){ //direct function
//         console.log('item add to list')
//     }
// }

// item.buy()
// item.addtolist()


let User = {
    name:'gowtham',
    password:'2208',
    conp:'2208',
    mail(){
    console.log('mail valid')
    },
    ph:9942
}

console.log(User)
User.mail()

let key = 'password';
User[key] = '2910'
console.log(User)
