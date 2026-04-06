let Ben = {
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
    ["favourite Enemy"]: "vilgax"
};

const { userName, ...others } = Ben;

// console.log(others);

Ben = Object.fromEntries(
    Object.entries(Ben).filter(([key]) => key !== "favourite Enemy")
)

// console.log(Ben);

const user = {
    name: "Jai",
    password: "12345",

    toJSON() {
        return {
            name: this.name
        };
    }

};

// console.log(JSON.stringify(user));
