import HomePage from "../page/HomePage.spec"

const homePageObj = new HomePage();

class HomePageActions {

    goToSignUpLoginPage() {
        homePageObj.getSignUpLoginButton().click()
    }

    verifyLoggedInUser(user) {
        homePageObj.getLoggedInUserElement().should('contain', user)
    }

    clickDeleteAccount() {
        homePageObj.getDeleteAccountButton().click()
    }

    checkIfAccountDeleted() {
        homePageObj.accountDeletedText().should('be.visible')
    }

    clickLogoutButton() {
        homePageObj.getLogoutbutton().click()
    }

    goToContactUsPage(){
        homePageObj.getContactUsButton().click()
    }

    goToHomePage(){
        homePageObj.getHomeButton().click()
    }

    goToTestCasesPage(){
        homePageObj.getTestCasesButton().click()
    }

    goToCartPage(){
        homePageObj.getCartButton().click()
    }

    goToProductsPage(){
        homePageObj.getProductsButton().click()
    }

    checkIfSubscriptionHeaderIsVisible(){
        homePageObj.getSubscriptionHeader().should('be.visible')
    }

    submitSubscriptionEmail(){
        homePageObj.getSubscriptionEmailField().type('hello123@mailinator.com{enter}')
    }

    checkSubscriptionSuccessMessage(){
        homePageObj.getSubscriptionSuccessMessage().should('be.visible')
        homePageObj.getSubscriptionSuccessMessage().should('have.text','You have been successfully subscribed!')
    }
}

export default HomePageActions;