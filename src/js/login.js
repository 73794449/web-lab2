import ControllerUser from './controller/ControllerUser.js'
import UserModel from './model/UserModel.js';
import UserView from './view/UserView.js';

let userModel = new UserModel();
let userView = new UserView(userModel);

let controller = new ControllerUser(userModel, userView);

const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', function () {
    controller.loginMe();
});