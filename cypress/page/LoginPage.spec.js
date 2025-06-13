class LoginPage{

    userNameField(data){
        cy.xpath('//input[@data-qa="signup-name"]').type(data.userName);
    }

    emailField(data){
        cy.xpath('//input[@data-qa="signup-email"]').type(data.email);
    }

    signUpButton(){
        cy.xpath('//button[@data-qa="signup-button"]').click();
    }


}

export default LoginPage;