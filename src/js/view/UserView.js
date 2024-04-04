export default class UserView{
    constructor(userModel) {
        this.userModel = userModel;
    }   

    registerStatus() {
        alert('Registration status: ' + this.userModel.status);
        this.userModel.status = 'Not registered';
    }

    loginStatus() {
        alert('Login status: ' + this.userModel.status);
        this.userModel.status = 'Wait';
    }

    selectData() {
        document.getElementById("email-form").innerHTML = this.userModel.email;
        document.getElementById("dateob-form").innerHTML = this.userModel.dateOfBirth;
        document.getElementById("gender-form").innerHTML = this.userModel.gender;
    }

    updateStatus() {
        alert("Update status: " + this.userModel.status);
    }

}