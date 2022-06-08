let deg = 0
let count = 0
let place = "normal"
let password = []
let realPassWord = []
let text = ["SETUP","CLEAR","ERROR"]
let setup = true

const rollEvent = e =>{
    if(e == "l"){
        deg -= 45
        count == 0 ? count = 7 : count--
        place = "l"
    }else{
        deg +=45
        count == 7 ? count = 0 : count ++
        place = "r"
    }

    document.querySelector(".rollMain").style["transform"]=`translate(-50%,-50%) rotate(${deg}deg)`
}

const cl = () =>{
    deg = 0
    count = 0
    place = "normal"
    password = []

    document.querySelectorAll(".math > span").forEach(e =>{
        e.innerText = "0"
    })

    document.querySelector(".rollMain").style["transform"] = "translate(-50%,-50%) rotate(0deg)"
}

const inp = ()=>{
    if(place=="normal" || password.length >=5){
        return
    }

    let target = []

    switch(count){
        case  0:
            target.push(0)
            break
        case  1:
            target.push(45)
            break
        case  2:
            target.push(90)
            break
        case  3:
            target.push(135)
            break
        case  4:
            target.push(180)
            break
        case  5:
            target.push(225)
            break
        case  6:
            target.push(270)
            break
        case  7:
            target.push(315)
            break
    }

    place == "l" ? target.push("l") : target.push("r")
    password.push(target)
    innerPassword(target,password.length-1)
}

const innerPassword = (e,i) =>{
    document.querySelectorAll(".math > span")[i].innerHTML=`<b class="${e[1]}">${e[0]}</b>`
}

const op = () =>{
    let target = document.querySelectorAll(".math > span > b")
    let situation

    setup ? situation = 0 : null
    
    if(target.length >= 5){
        if(situation == 0){
            realPassWord = password
            setup = false
        }else if(JSON.stringify(password) === JSON.stringify(realPassWord)){
            situation = 1
        }else{
            situation = 2
        }

        target.forEach((e,i) =>{
            e.innerText = text[situation][i]
        })

        document.querySelector(".math").classList.add(text[situation].toLowerCase())
        document.querySelector("body").classList.add("stopEvent")

        setTimeout(()=>{
            cl()
            document.querySelector(".math").classList.remove(text[situation].toLowerCase())
            document.querySelector("body").classList.remove("stopEvent")
        },1000)
    }
}
