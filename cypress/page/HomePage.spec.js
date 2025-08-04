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

    getContactUsButton(){
        return cy.xpath('//a[contains(text(),"Contact us")]')
    }

    getHomeButton(){
        return cy.xpath('//a[contains(text(),"Home")]')
    }

    getTestCasesButton(){
        return cy.xpath('//a[contains(text(),"Test Cases")]')
    }

    getProductsButton(){
        return cy.xpath('//a[contains(text(),"Products")]')
    }

    getCartButton(){
        return cy.xpath('//a[contains(text(),"Cart")]')
    }

    getSubscriptionHeader(){
        return cy.xpath('//h2[text()="Subscription"]')
    }

    getSubscriptionEmailField(){
        return cy.xpath('//input[@id="susbscribe_email"]')
    }

    getSubscriptionSuccessMessage(){
        return cy.xpath('//div[@class="alert-success alert"]')
    }

}

export default HomePage;