const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener("click",function(e) {
        console.log(e);
        console.log(e.target)
        if(e.target.id === "grey"){
            body.style.backgroundColor = e.target.id;
            h1.style.color = "white"
            h2.style.color = "white"
        } else if(e.target.id === "white"){
            body.style.backgroundColor = "white"
            h1.style.color = "black"
            h2.style.color = "black"
        } else if(e.target.id === "blue"){
            body.style.backgroundColor = "blue"
            h1.style.color = "white"
            h2.style.color = "white"
        } else if(e.target.id === "yellow"){
            body.style.backgroundColor = "yellow"
            h1.style.color = "red"
            h2.style.color = "red"
        }
    })
})