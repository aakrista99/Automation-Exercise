import LoginPage from "../page/LoginPage.spec";

const loginPageObj = new LoginPage();

class LoginPageActions {

    fillUserNameFieldSignup(data) {
        loginPageObj.getUserNameFieldSignup(data).type(data.userName);
    }

    fillEmailFieldSignup(data) {
        loginPageObj.getEmailFieldSignup(data).type(data.email)
    }

    clickSignUpButton() {
        loginPageObj.getSignUpButton().click()
    }

    fillEmailFieldLogin(data){
        loginPageObj.getEmailFieldLogin().type(data)
    }

    fillPasswordFieldLogin(data){
        loginPageObj.getPasswordFieldLogin().type(data)
    }

    clickLoginButton(){
        loginPageObj.getLoginButton().click()
    }

    checkLoginErrorMessage(){
        loginPageObj.getLoginErrorMessage()
    }
}

export default LoginPageActions;