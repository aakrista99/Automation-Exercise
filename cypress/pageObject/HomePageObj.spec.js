import HomePage from "../page/HomePage.spec"

const homePageObj = new HomePage()

class HomePageActions {

    goToSignUpLoginPage(){
        homePageObj.getSignUpLoginButton().click()
    }
    
    verifyLoggedInUser(user) {
        homePageObj.getLoggedInUserElement().should('contain', user)
    }

    clickDeleteAccount() {
        homePageObj.getDeleteAccountButton().click()
    }

    checkIfAccountDeleted(){
        homePageObj.accountDeletedText().should('be.visible')
    }

    clickLogoutButton(){
        homePageObj.getLogoutbutton().click()
    }

}

export default HomePageActions;