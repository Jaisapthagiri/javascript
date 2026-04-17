const dynamicImport = async () => {

    const user = {
        name : "Arthur"
    }

    const data = await import ("./modules.js");
    data.default();
    data.greet.call(user);
    data.sayHi("Morgan");
}

dynamicImport();