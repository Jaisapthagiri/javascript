function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World");
        }, 2000);
    });
}

async function main() {
    console.log("Start");

    let data = await getData();
    console.log(data);

    console.log("End");
}

main();

// ctrl

let sampleData = {
    "title": "Red Dead Redemption 2",
    "developer": "Rockstar Games",
    "release_year": 2018,
    "main_character": "Arthur Morgan",
    "genre": "Action-adventure"
}

const data = async () => {
    try {
        const { title, developer, release_year, main_character, genre } = sampleData;
        let datas = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!title || !developer || !release_year) {
                    reject("Main Data are missing");
                } else {
                    resolve(JSON.stringify(sampleData));
                }
            }, 2000);
        });
        console.log(datas);
    } catch (error) {
        console.log("Error: ", error);
    }
}