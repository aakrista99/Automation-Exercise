import LoginPage from "../page/LoginPage.spec";

const loginPageObj = new LoginPage();

class LoginPageActions {

    fillUserNameField(data) {
        loginPageObj.getuserNameField(data).type(data.userName);
    }

    fillEmailField(data) {
        loginPageObj.getemailField(data).type(data.email)
    }

    clickSignUpButton() {
        loginPageObj.getsignUpButton().click()
    }

}

export default LoginPageActions;