import 'cypress-xpath'
import HomePageActions from "../pageObject/HomePageObj.spec";
import LoginPageActions from "../pageObject/LoginPageObj.spec";

beforeEach('Visit website', () => {
    cy.viewport(1366, 768)
    cy.visit('https://www.automationexercise.com')
})

describe('Test cases related to Login functionality', () => {

    const homePage = new HomePageActions();
    const loginPage = new LoginPageActions();

    it('Test Case 2 - Login with valid username/password', () => {
        cy.fixture('loginData.json').then((data) => {
            homePage.goToSignUpLoginPage();
            loginPage.fillEmailFieldLogin(data.email); //read loginData json and use the email stored in it
            loginPage.fillPasswordFieldLogin(data.password); //read loginData json and use the password stored in it
            loginPage.clickLoginButton()
            homePage.verifyLoggedInUser(data.userName); //read loginData json and use the userName stored in it to check the logged in user via userName
            homePage.clickLogoutButton();
        })
    })

    it('Test Case 3 - Login with invalid username/password', () => {
        cy.fixture('loginData.json').then((data) => {
        homePage.goToSignUpLoginPage();
        loginPage.fillEmailFieldLogin(`${data.email}1`);  //read the loginData json and concat '1' with the valid email to make it invalid
        loginPage.fillPasswordFieldLogin(`${data.password}1`); //read the loginData json and concat '1' with the valid password to make it invalid
        loginPage.clickLoginButton()
        loginPage.checkLoginErrorMessage()  //check if the login error message is visible
    })
})
})
