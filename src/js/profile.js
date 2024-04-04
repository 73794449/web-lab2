import ControllerUser from './controller/ControllerUser.js'
import UserModel from './model/UserModel.js';
import UserView from './view/UserView.js';

let userModel = new UserModel();
let userView = new UserView(userModel);

let controller = new ControllerUser(userModel, userView);

controller.updateMe();

const updateButton = document.getElementById('update-button');

updateButton.addEventListener('click', function () {
    controller.updatePasswordMe();
});