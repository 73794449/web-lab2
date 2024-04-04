export default class ControllerUser {
    constructor(userModel,userView) {
        this.userModel = userModel;
        this.userView = userView;
    }

    registerMe() {
        this.userModel.register();
        if (this.userModel.status === 'Done')
            window.location.href = 'login.html'
        else
            this.userView.registerStatus();
    }

    loginMe() {
        this.userModel.login();
        if (this.userModel.status === 'Login') 
            window.location.href = 'profile.html';
        else
            this.userView.loginStatus();
    }

    updateMe() {
        this.userModel.select();
        this.userView.selectData();
    }

    updatePasswordMe() {
        this.userModel.update();
        this.userView.updateStatus();
    }
}