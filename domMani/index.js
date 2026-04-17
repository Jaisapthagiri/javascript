let pare = document.getElementById("ele");
let btn = document.getElementById("btn");

// event Listeners

btn.addEventListener("click", () => {
    pare.style.background = "none";
    console.log("clicked");
});

// selectors

let par = document.getElementsByClassName("content");
let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
    par[1].style.fontSize = "30px";
    par[1].style.color = "green";
    par[1].textContent = "changed second heading"
})

btn1.addEventListener("click", () => {
    par[0].style.fontSize = "60px";
})

let div1 = document.getElementsByTagName("div");
let btn2 = document.getElementById("btn2");

btn2.addEventListener("click", () => {
    div1[0].style.background = "none";
});

let input = document.getElementById("textBox");
let output = document.getElementById("demo");

input.addEventListener("input", () => {
    output.textContent = input.value;
})

// input.addEventListener("keyup", () => {
//     output.textContent = input.value;
// })


// input.addEventListener("keydown", () => {
//     output.textContent = input.value;
// })

let inp = document.getElementById("dem1");
let out = document.getElementById("butto");

// flag

let isShown = false;

function sayHai() {
    if(isShown){
        inp.innerHTML = "";
    }else{
        inp.innerHTML = "<h1>Hello Man</h1>";
    }
    isShown = !isShown;
    console.log(isShown);
}

out.addEventListener("click", sayHai)

// adding the content the page

let dis = document.createElement("h2");
dis.textContent = "Hello  Broskey";

// document.body.appendChild(dis);

// adding into some specific place

let container = document.getElementById("cont");
container.appendChild(dis);