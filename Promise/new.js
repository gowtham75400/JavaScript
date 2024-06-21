let love = new Promise((reslove,reject)=>{
    let lovestatus =  true;
    if(lovestatus)
        return setTimeout(reslove,3000,"Love accpted")
    else
        return reject('Not interseted ')
})

async function lovestatus(){
    try{
        console.log("welcome");
        let res = await love
        console.log(res);
    }
    catch(err){
        console.log(err);
    }
    finally{
        console.log("Tq");
    }
}

lovestatus()

