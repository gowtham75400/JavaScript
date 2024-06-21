 // alert('Hi');
        //variable - 8 bytes => 1byte - 8 bits
        // Dynamic typed language eg . score = "new"
        let score = 0 ; //Initialization
        //we can't rewrite const 
        //assignment
        // score = 10;
        // console.log("Hello");
        // console.log("Score is "+ score);


        //  Operators 

        /*
        Arithmetic operators  + - * / % ++ --
        assigment operaters = +=  -= /= 
        Infinity => Spl value => NaN --> Not a Number
        comparison opertors == ===  !=  !==  >  <  >=  <= 
        {
            a= '5'
            Stict type to compare
            a===5
        }

        Logical operators &&  ||   !
        Bitwise operators &    |    ~   ^   >>(opp swift \>)  <<(swift </)  >>>
         */


        // let tickets = prompt("How many tictes u want?");
        // console.log(Number(tickets)*10);

        //DOM 

        //Math function in w3scl

        //if 
        let a = 90; 
        let b = 60 ;
        let max;

        // if (a > b)
        //     max = a;
        // else 
        //     max = b;

        //     console.log(max)

        // max = a > b ? "a is max : " + a : "b is max :" + b;
        // console.log(max)


        //Loops

        // for(let i = 1 ; i < 6 ; i++){
        //     for(let j = 1 ; j <i ; j++) {
        //     console.log('*')
        //     }
        // }

        i = 10;
        while(i>= 1){
        console.log(i)
        i--
        }

        i=10;
        do{
        console.log(i)
        i--
        }while(i>=10)


        //break - stops the loop

        // while(true){
        //     let num = Number(prompt('Enter a number '));
        //     if(!lisNaN(num))
        //         break;
        // }

        // //continue
        // for(let i = 1 ; i <=10 ; i++){
        //     if(i%3 == 0){
        //         continue
        //     }
        //     console.log(i)
        //     }

        // //for of for array
        // let arr = ['apple','orange','pinaple',"mango"]

        // for(i = 0 ; i <= arr.length ; i++){
        //     console.log(arr[i])
        // }

        // for(let fruit of arr){
        //     console.log(fruit.toUpperCase())
        // }

        //for in for Object 

    let item = {
    name:'phone',
    price:23000,
    quantity:2,
    categories:['electronics','phones'],
    dimensions:{
        length:7,
        breath:3.5,
        height:5
    }
}

        for(let key in item){
            console.log(item)
        }