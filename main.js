let h1 = document.createElement("h1")
document.body.appendChild(h1)
h1.innerHTML = "COUNTER"
h1.classList.add("h1")

numberin = 0

let number = document.createElement("p")
document.body.appendChild(number)
number.innerHTML = numberin
number.classList.add("p1")     

let maindiv = document.createElement("div")
document.body.appendChild(maindiv)
maindiv.classList.add("maindiv")

let decrease = document.createElement("button")
maindiv.appendChild(decrease)
decrease.classList.add("decrease")
decrease.innerHTML = "Decrease"

let reset = document.createElement("button")
maindiv.appendChild(reset)
reset.classList.add("reset")
reset.innerHTML = "Reset"

let increase = document.createElement("button")
maindiv.appendChild(increase)
increase.classList.add("increase")
increase.innerHTML = "Increase"

decrease.addEventListener("click", function () {
    number.innerHTML--
})

reset.addEventListener("click", function(){
    number.innerHTML = 0
})

increase.addEventListener("click", function(){
    number.innerHTML++
})

decrease.addEventListener("mouseover", function(){
    decrease.style.backgroundColor = "rgb(181, 71, 71)"
    decrease.style.color = "white"
})

decrease.addEventListener("mouseleave", function(){
    decrease.style.backgroundColor = "white"
    decrease.style.color = "black"
})

reset.addEventListener("mouseover",function(){
    reset.style.backgroundColor = "rgb(70, 146, 227)"
    reset.style.color = "white"
})

reset.addEventListener("mouseleave",function(){
    reset.style.backgroundColor = "white"
    reset.style.color = "black"
})

increase.addEventListener("mouseover", function(){
    increase.style.backgroundColor = "green"
    increase.style.color = "white"
})

increase.addEventListener("mouseleave", function(){
    increase.style.backgroundColor = "white"
    increase.style.color = "black"
})