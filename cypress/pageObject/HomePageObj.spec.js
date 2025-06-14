import HomePage from "../page/HomePage.spec"

const homePageObj = new HomePage()

class HomePageActions {

    goToSignUpLoginPage(){
        homePageObj.getSignUpLoginButton().click()
    }
    
    verifyLoggedInUser(user) {
        homePageObj.getLoggedInUserElement(user).should('contain', user)
    }

    clickDeleteAccount() {
        homePageObj.getDeleteAccountButton().click()
    }

    checkIfAccountDeleted(){
        homePageObj.accountDeletedText().should('be.visible')
    }

}

export default HomePageActions;