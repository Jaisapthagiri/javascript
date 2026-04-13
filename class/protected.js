class User {
    constructor(name) {
        this._name = name;
    }

    _getName() {
        return this._name;
    }

}

class Admin extends User {
    getAdminName() {
        return this._getName();
    }
}

const admin = new Admin("Jai");

console.log(admin.getAdminName());

console.log(admin._name); 