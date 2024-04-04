export default class UserModel{
    constructor() {
        this.email = '';
        this.password = null;
        this.gender = '';
        this.dateOfBirth = null;
        this.status = 'Wait';
    }

    register() {
        let password_verify;
        this.email = document.getElementById("email").value;
        this.password = document.getElementById("password").value;
        password_verify = document.getElementById("password-verify").value;
        this.dateOfBirth = document.getElementById("dateob").value;
        this.gender = document.getElementById("gender-select").value;
        let user_records = new Array();
        user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
        if (this.password !== password_verify) { this.status = 'Recheck password and password verify'; }
        if (JSON.stringify(this.password).length - 2 < 8) { this.status = 'Password length must be more or equal to 8 symbols'; }
        if (JSON.stringify(this.email) == '') { this.status = 'Email is empty'; }
        if (JSON.stringify(this.dateOfBirth) === '""') { this.status = 'Date of birth is empty'; }
        if (this.status === 'Wait') {
            if (user_records.some((v) => { return v.email == this.email })) { this.status = "Already registered"; }
            else {
                this.status = 'Done'; user_records.push({ "email": this.email, "password": this.password, "gender": this.gender, "dateob": this.dateOfBirth })
                localStorage.setItem("users", JSON.stringify(user_records));
            }
        }
    }

    login() {
        this.email = document.getElementById("email").value;
        this.password = document.getElementById("password").value;
        let user_records = new Array();
        user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
        if (user_records.some((v) => { return v.email == this.email })) {
            let possible_password = user_records.find((v) => v.email == this.email).password;
            if (possible_password == this.password) {
                this.status = 'Login';
            }
            else
                this.status = 'Incorrect password';
        }
        else {
            this.status = 'Incorrect login data';
        }

        localStorage.setItem("current-user", this.email);
    }

    select() {
        this.email = localStorage.getItem("current-user");
        let user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
        this.password = user_records.find((v) => v.email == this.email).password;
        this.dateOfBirth = user_records.find((v) => v.email == this.email).dateob;
        let gender_id = user_records.find((v) => v.email == this.email).gender;
        if (gender_id == 1)
            this.gender = 'Male';
        else if (gender_id == 2)
            this.gender = 'Female';
        else if (gender_id == 3)
            this.gender = 'Helicopter'
    }

    update() {
        let possible_password = document.getElementById("password").value;
        if (JSON.stringify(possible_password).length - 2 < 8) { this.status = 'Password length must be more or equal to 8 symbols'; }
        if (this.status == 'Wait') {
            let user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
            user_records.find((v) => v.email == this.email).password = possible_password;

            localStorage.setItem("users", JSON.stringify(user_records));
            this.password = possible_password;
            this.status = 'Updated';
        }
    }
}