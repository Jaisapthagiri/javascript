class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class ValidationError extends MyError { }

class EmailValidationError extends ValidationError {
    constructor(email) {
        super(`Invalid Email: ${email}`);
        this.email = email;
    }
}

class PasswordValidationError extends ValidationError {
    constructor(message) {
        super(message);
    }
}

const data = {
    email: "jai@gmail.com",
    password: "asdf12we"
}

const userData = async () => {
    try {
        const { email, password } = data;

        if (!email.includes("@")) {
            throw new EmailValidationError(email);
        }

        if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/.test(password)) {
            throw new PasswordValidationError("Must include letter, number and special character");
        }

        return { email, password };

    } catch (error) {
        if (error instanceof ValidationError) {
            console.log("Validation Error: ", error.message);
        } else {
            console.log(error);
        }
    }
}

userData();
