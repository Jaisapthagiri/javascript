"use strict"

let content = {
    Story: "rdr2",
    Protagonist: "Arthur",
    Protagonist2: "John",
    Lead: "Dutch",
    Antagonist: "Micheal"
}

// content.Lead = "Dutch Van der Lee"

// Object.keys(content).forEach(key => {
//     Object.defineProperty(content, key, {
//         writable: false,
//         enumerable: true,
//         // enumerable: false,
//         configurable: false
//     });
// })

// delete content.Protagonist2;

// console.log(content);


// let desc = Object.getOwnPropertyDescriptors(content)

// Object.fromEntries(
//     Object.entries(content).filter(
//         ([key]) => key !== "Lead"
//     )
// )


// let asdf = function

let rockStar = {
    Story: "rdr2",
    Protagonist: "Arthur",
    Protagonist2: "John",
    Lead: "Dutch",
    Antagonist: "Micheal",

    get friends(){
        return "friends are " + this.Protagonist + " " + this.Protagonist2
    },

    set friends(value){
        [this.Protagonist , this.Protagonist2] = value.split(" ")
    }
}

rockStar.Protagonist="Arthur Morgan"
rockStar.Protagonist2="John Marston"

console.log(rockStar.Protagonist);
console.log(rockStar.Protagonist2);

