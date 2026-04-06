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