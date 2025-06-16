class LoginPage {

    getUserNameFieldSignup(data) {
        return cy.xpath('//input[@data-qa="signup-name"]')
    }

    getEmailFieldSignup(data) {
        return cy.xpath('//input[@data-qa="signup-email"]')
    }

    getSignUpButton() {
        return cy.xpath('//button[@data-qa="signup-button"]')
    }

    getEmailFieldLogin(){
        return cy.xpath('//input[@data-qa="login-email"]')
    }

    getPasswordFieldLogin(data){
        return cy.xpath('//input[@data-qa="login-password"]')
    }

    getLoginButton(){
        return cy.xpath('//button[@data-qa="login-button"]')
    }

    getLoginErrorMessage(){
        return cy.xpath('//p[contains(text(),"Your email or password is incorrect!")]').should('be.visible')
    }

}

export default LoginPage;