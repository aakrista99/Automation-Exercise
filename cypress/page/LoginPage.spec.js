class LoginPage {

    getuserNameField(data) {
        return cy.xpath('//input[@data-qa="signup-name"]')
    }

    getemailField(data) {
        return cy.xpath('//input[@data-qa="signup-email"]')
    }

    getsignUpButton() {
        return cy.xpath('//button[@data-qa="signup-button"]')
    }


}

export default LoginPage;