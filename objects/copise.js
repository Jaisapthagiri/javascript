const city = Symbol("city")
const Ben = {
    userName: "Tennyson",
    age: 15,
    city: "bellwood",
    version: {
        child: "Omnitrix",
        teen: "ultimatrix",
        epic: "omniverse",
    },
    friends: {
        grandFather: "max Tennyson",
        cousine: "Gwen",
        friend: "kevin11",
    },
    aliens: {
        fourarm: "power",
        xlr8: "fast",
        heatblast: "fire",
    },
    ["favourite Enemy"]: "vilgax",

    toString(){
        date : new Date()
    }
    
};



// shallow copy using REST Operator


const shallow = { ...Ben };

// shallow.aliens.fourarm = "strength";

// console.log(Ben);                // {
                                    //   userName: 'Tennyson',
                                    //   age: 15,
                                    //   city: 'bellwood',
                                    //   version: { child: 'Omnitrix', teen: 'ultimatrix', epic: 'omniverse' },
                                    //   friends: { grandFather: 'max Tennyson', cousine: 'Gwen', friend: 'kevin11' },
                                    //   aliens: { fourarm: 'strength', xlr8: 'fast', heatblast: 'fire' },
                                    //   'favourite Enemy': 'vilgax'
                                    // }

                                    
// objectAssign

const assign = Object.assign({}, Ben);

assign.friends["New Friend"] = "Rook";

// console.log(Ben);            //{
                                //   userName: 'Tennyson',
                                //   age: 15,
                                //   city: 'bellwood',
                                //   version: { child: 'Omnitrix', teen: 'ultimatrix', epic: 'omniverse' },
                                //   friends: {
                                //     grandFather: 'max Tennyson',
                                //     cousine: 'Gwen',
                                //     friend: 'kevin11',
                                //     'New Friend': 'Rook'
                                //   },
                                //   aliens: { fourarm: 'power', xlr8: 'fast', heatblast: 'fire' },
                                //   'favourite Enemy': 'vilgax'
                                // }


// console.log(assign);         // {
                                // userName: 'Tennyson',
                                // age: 15,
                                // city: 'bellwood',
                                // version: { child: 'Omnitrix', teen: 'ultimatrix', epic: 'omniverse' },
                                // friends: {
                                //     grandFather: 'max Tennyson',
                                //     cousine: 'Gwen',
                                //     friend: 'kevin11',
                                //     'New Friend': 'Rook'
                                // },
                                // aliens: { fourarm: 'power', xlr8: 'fast', heatblast: 'fire' },
                                // 'favourite Enemy': 'vilgax'
                                // }


// deep copy using JSON methods

const deep = JSON.parse(JSON.stringify(Ben));

deep.aliens.fourarm = "strength";

// console.log(Ben);                //{
                                    //   userName: 'Tennyson',
                                    //   age: 15,
                                    //   city: 'bellwood',
                                    //   version: { child: 'Omnitrix', teen: 'ultimatrix', epic: 'omniverse' },
                                    //   friends: { grandFather: 'max Tennyson', cousine: 'Gwen', friend: 'kevin11' },
                                    //   aliens: { fourarm: 'power', xlr8: 'fast', heatblast: 'fire' },
                                    //   'favourite Enemy': 'vilgax'
                                    // }

// console.log(deep);                   //  {
                                    //   userName: 'Tennyson',
                                    //   age: 15,
                                    //   city: 'bellwood',
                                    //   version: { child: 'Omnitrix', teen: 'ultimatrix', epic: 'omniverse' },
                                    //   friends: { grandFather: 'max Tennyson', cousine: 'Gwen', friend: 'kevin11' },
                                    //   aliens: { fourarm: 'strength', xlr8: 'fast', heatblast: 'fire' },
                                    //   'favourite Enemy': 'vilgax'
                                    // }

// deep copy using StructuredClone

const clone = structuredClone(Ben); // avail from when v

clone.aliens.fourarm = "4 hands power";

// console.log(clone);          // {
                                //   userName: 'Tennyson',
                                //   age: 15,
                                //   city: 'bellwood',
                                //   version: { child: 'Omnitrix', teen: 'ultimatrix', epic: 'omniverse' },
                                //   friends: { grandFather: 'max Tennyson', cousine: 'Gwen', friend: 'kevin11' },
                                //   aliens: { fourarm: '4 hands power', xlr8: 'fast', heatblast: 'fire' },
                                //   'favourite Enemy': 'vilgax'
                                // }

// console.log(Ben);            //  {
                                //   userName: 'Tennyson',
                                //   age: 15,
                                //   city: 'bellwood',
                                //   version: { child: 'Omnitrix', teen: 'ultimatrix', epic: 'omniverse' },
                                //   friends: { grandFather: 'max Tennyson', cousine: 'Gwen', friend: 'kevin11' },
                                //   aliens: { fourarm: 'power', xlr8: 'fast', heatblast: 'fire' },
                                //   'favourite Enemy': 'vilgax'
                                // }

// let user = {
//     name: "sabari",
//     age: 27,
//     address: {
//         city: "theni",
//         pin: 625522
//     }
// }

function User(uName,age){
    uName : this.uName
    age : this.age
    return uName + " " + age
}

const u1 = new User("Jai",21);
const u2 = new User("TAm",21);

console.log(u1);
console.log(typeof u1);
console.log(u2);


// immmediately invoked func exp
// commonJS and module diff
