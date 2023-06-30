let resultH = document.getElementById("home-score")
let btn01 = document.getElementById("button_score01")
let btn02 = document.getElementById("button_score02")
let btn03 = document.getElementById("button_score03")
let scoreH = document.getElementById("home-score")
let count = 0

function button01() {
    count=count+1
    console.log(count)
    scoreH.innerHTML=count
}
function button02() {
    count=count+2
    console.log(count)
    scoreH.innerHTML=count  
}
function button03() {
    count=count+3
    console.log(count)
    scoreH.innerHTML=count  
}