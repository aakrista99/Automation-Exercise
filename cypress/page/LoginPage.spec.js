class LoginPage{

    userNameField(address){
        cy.xpath('//input[@data-qa="signup-name"]').type(address.userName)
    }

    emailField(address){
        cy.xpath('//input[@data-qa="signup-email"]').type(address.email)
    }

    signUpButton(){
        cy.xpath('//button[@data-qa="signup-button"]').click()
    }


}

export default LoginPage;