class HomePage {

    getSignUpLoginButton(){
        return cy.xpath('//a[contains(text(),"Signup / Login")]')
    }

    getLoggedInUserElement() {
        return cy.xpath('//i[@class="fa fa-user"]//ancestor::a')
    }

    getDeleteAccountButton() {
        return cy.xpath('//a[@href="/delete_account"]')
    }

    accountDeletedText(){
        return cy.xpath('//h2[@data-qa="account-deleted"]')
    }

    getLogoutbutton(){
        return cy.xpath('//a[contains(text(),"Logout")]')
    }
}

export default HomePage;