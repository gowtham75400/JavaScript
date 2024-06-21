let text = document.getElementById("color")
let btn = document.getElementById("btn")
let wrap = document.getElementById("wrap")
let hex = [0,1,2,3,4,5,6,7,.8,9,'A','B','C','D','E','F']

btn.addEventListener('click',function(){
    let hexcolor = '#'
    for(let i = 1 ; i <=6 ; i++){
        hexcolor += hexvalue()
    }
    console.log(hexcolor)

    wrap.style.backgroundColor = hexcolor
    text.innerHTML = hexcolor

    
})

function hexvalue(){
    let randomcolor = Math.floor(Math.random()*hex.length)
    return hex[randomcolor];
}
