let input = 18;
let inputG = 10;
let el = document.getElementById("homeScore")
let el1 = document.getElementById("guestScore")



function plusOneHome() {
   
    input += 1
    el.innerText = input
    
}
function plusTwoHome() {
   
    input += 2
    el.innerText = input
    
}
function plusThreeHome() {
   
    input += 3
    el.innerText = input
    
}

//Guest
function plusOneG() {
   
    inputG += 1
    el1.innerText = inputG
    
}
function plusTwoG() {
   
    inputG += 2
    el1.innerText = inputG
    
}
function plusThreeG() {
   
    inputG += 3
    el1.innerText = inputG
    // console.log(inputG)
    
}
