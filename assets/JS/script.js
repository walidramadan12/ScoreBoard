let resultH = document.getElementById("home-score")
let btn01 = document.getElementById("button_score01")
let btn02 = document.getElementById("button_score02")
let btn03 = document.getElementById("button_score03")
let scoreH = document.getElementById("home-score")

let btn1 = document.getElementById("button_score1")
let btn2 = document.getElementById("button_score2")
let btn3 = document.getElementById("button_score3")
let scoreG = document.getElementById("guest-score")

let count01 = 0
let count02 = 0

let stats = document.getElementById("stats-score")

function button01() {
    count01=count01+1
    console.log(count01)
    scoreH.textContent=count01
}
function button02() {
    count01=count01+2
    console.log(count01)
    scoreH.innerHTML=count01
}
function button03() {
    count01=count01+3
    console.log(count01)
    scoreH.innerHTML=count01 
}

function button1() {
    count02=count02+1
    console.log(count02)
    scoreG.innerHTML=count02
}
function button2() {
    count02=count02+2
    console.log(count02)
    scoreG.innerHTML=count02
}
function button3() {
    count02=count02+3
    console.log(count02)
    scoreG.innerHTML=count02
}
function reset() {
    scoreG.innerHTML = 0
    scoreH.innerHTML = 0 
    count01=0
    count02=0
}