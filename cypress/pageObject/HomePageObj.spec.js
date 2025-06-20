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
}

export default HomePageActions;