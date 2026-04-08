"use strict"


let content = {
    Story: "rdr2",
    Protagonist: "Arthur",
    Protagonist2: "John",
    Lead: "Dutch",
    Antagonist: "Micheal"
}



// Object.keys(content).forEach(key => {
//     Object.defineProperty(content, key, {
//         writable: false,
//         enumerable: true,
//         // enumerable: false,
//         configurable: false
//     });
// })

// content.Lead = "Dutch Van der Lee"

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

    set friends2(value){
        [this.Protagonist , this.Protagonist2] = value.split(" ")
    }
}

rockStar.Protagonist="Arthur Morgan"
rockStar.Protagonist2="John Marston"

// console.log(rockStar.friends);
// console.log(rockStar.friends2);      // check why the error come

                    
// TypeError: rockStar.friends2 is not a function
//     at Object.<anonymous> (D:\js\objProProto\config.js:61:22)
//     at Module._compile (node:internal/modules/cjs/loader:1812:14)
//     at Object..js (node:internal/modules/cjs/loader:1943:10)
//     at Module.load (node:internal/modules/cjs/loader:1533:32)
//     at Module._load (node:internal/modules/cjs/loader:1335:12)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47

// Node.js v24.14.1

