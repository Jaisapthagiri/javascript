// core content

let content = document.createElement("p");
// content.textContent = "Hello";
// document.body.appendChild(content);

// content.innerHTML = "<h1>Hello</h1>";
// document.body.appendChild(content);

// content.innerText = "Hello";
// document.body.appendChild(content);

let divi = document.getElementById("divi");
let innDivi = document.createElement("div");
divi.appendChild(innDivi);
innDivi.id = "vals";
console.log(innDivi.style);


let docom = document.getElementById("vals");
docom.innerHTML = "<h1>This created using dom</h1>";
// innDivi.appendChild(docom);

console.log(Object.assign(innDivi.style, {
    backgroundColor: "black",
    color: "white",
    padding: "20px",
    borderRadius: "10px"
}));

// bubbling and capturing

let list = document.getElementById("list");

list.addEventListener("click", (e) => {
    console.log(e.target);
    // if (e.target.tagName === "LI") {
    //     if (e.target.style.color === "red") {
    //         e.target.style.color = "";
    //     } else {
    //         e.target.style.color = "red";
    //     }
    // }
    if (e.target.tagName === "LI") {
        document.querySelectorAll('#list li').forEach(li => {
            li.style.color = "";
        });
        e.target.style.color = "red";
    };
});

let buto = document.getElementById("button")

buto.addEventListener("click", (e) => {
    if (e.altKey && e.enterKey) {
        alert("clicked");
    }
})
