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
// let remainH = count01-count02
// let remainG = count02-count01

let stats = document.getElementById("stats-score")
let remain = document.getElementById("remain")

function button01() {
    count01=count01+1
    scoreH.textContent=count01
    result()
}
function button02() {
    count01=count01+2
    scoreH.innerHTML=count01
    result()
}
function button03() {
    count01=count01+3
    scoreH.innerHTML=count01 
    result()
}

function button1() {
    count02=count02+1
    scoreG.innerHTML=count02
    result()
}
function button2() {
    count02=count02+2
    scoreG.innerHTML=count02
    result()
}
function button3() {
    count02=count02+3
    scoreG.innerHTML=count02
    result()
}
function reset() {
    scoreG.innerHTML = 0
    scoreH.innerHTML = 0 
    count01=0
    count02=0
    document.getElementById("guest").style.color="white"
    document.getElementById("home").style.color="white"
    stats.innerHTML = "Same Score Both"
    remain.innerHTML = null
}

function result(){
    if(count01>count02){
        stats.innerHTML = "home is higher by:"
        remain.innerHTML = count01-count02
        document.getElementById("home").style.color="red"
        document.getElementById("guest").style.color="white"
    }
    else if (count01<count02) {
        stats.innerHTML = "guest is higher by:"
        remain.innerHTML = count02-count01
        document.getElementById("guest").style.color="red"
        document.getElementById("home").style.color="white"
    }
    else if(count01=count02){
        stats.innerHTML = "Same Score Both"
        remain.innerHTML = null
        document.getElementById("guest").style.color="white"
        document.getElementById("home").style.color="white"
    }
}