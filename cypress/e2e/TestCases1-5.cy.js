import 'cypress-xpath'
import { getRegisterData } from '../utils/registerDataCreator.spec.js'
import { writeLoginData } from '../utils/loginDataWriter.spec.js'
import HomePageActions from '../pageObject/HomePageObj.spec.js'
import LoginPageActions from '../pageObject/LoginPageObj.spec.js'
import SignUpPageActions from '../pageObject/SignUpPageObj.spec.js'

describe('Test cases related to Register/Login/Logout', () => {

  before(() => { //runs once before the first it block
    getRegisterData(); //create the registration data using utils/registerDataCreator.spec.js
  })

  beforeEach(() => { //runs before each of the it blocks
    cy.viewport(1366, 768)
    cy.visit('https://www.automationexercise.com/')
  })

  const login = new LoginPageActions()
  const signUp = new SignUpPageActions()
  const home = new HomePageActions()

  it('Test Case 1 : Register user', () => {

    cy.fixture('registerData.json').then((data) => { //read registerData.json created from getRegisterData() and read its content as 'data' for further use

      home.goToSignUpLoginPage();
      signUp.checkIfLandedInSignUpPage(); //check if the user is in Initial Signup page 

      login.fillUserNameFieldSignup(data)
      login.fillEmailFieldSignup(data)
      login.clickSignUpButton(data)

      signUp.checkHeaderInFullSignUpPage(); //check if user is in Full Signup Page

      signUp.selectTitle()
      signUp.fillPasswordField(data)
      signUp.fillDOBFields()
      signUp.fillAddressInformationFields(data)
      signUp.clickCreateAccountButton()

      signUp.checkIfAccountCreated() //check if the account is created successfully

      writeLoginData(data.email, data.password, data.userName); //writes the email and password of user used to register, in loginData.json

      signUp.clickContinueButton();
      home.verifyLoggedInUser(data.userName);
      //home.clickDeleteAccount();
      //home.checkIfAccountDeleted(); //check if account is deleted successfully
    })
  })

  it('Test Case 2 : Login with valid username/password', () => {
    cy.fixture('loginData.json').then((data) => {
      home.goToSignUpLoginPage();
      login.fillEmailFieldLogin(data.email); //read loginData json and use the email stored in it
      login.fillPasswordFieldLogin(data.password); //read loginData json and use the password stored in it
      login.clickLoginButton()
      home.verifyLoggedInUser(data.userName); //read loginData json and use the userName stored in it to check the logged in user via userName
      // home.clickLogoutButton();
    })
  })

  it('Test Case 3 : Login with invalid username/password', () => {
    cy.fixture('loginData.json').then((data) => {
      home.goToSignUpLoginPage();
      login.fillEmailFieldLogin(`${data.email}1`);  //read the loginData json and concat '1' with the valid email to make it invalid
      login.fillPasswordFieldLogin(`${data.password}1`); //read the loginData json and concat '1' with the valid password to make it invalid
      login.clickLoginButton()
      login.checkLoginErrorMessage()  //check if the login error message is visible
    })
  })

  it('Test Case 4 : Logout User', () => {
    cy.fixture('loginData.json').then((data) => {
      home.goToSignUpLoginPage();
      login.fillEmailFieldLogin(data.email); //read loginData json and use the email stored in it
      login.fillPasswordFieldLogin(data.password); //read loginData json and use the password stored in it
      login.clickLoginButton()
      home.verifyLoggedInUser(data.userName); //read loginData json and use the userName stored in it to check the logged in user via userName
      home.clickLogoutButton();
      cy.url().should('include', '/login') //check if current url contains /login
    })
  })

  it('Test Case 5 : Register User with existing email', () => {
    cy.fixture('loginData.json').then((data) => {
      home.goToSignUpLoginPage();
      signUp.checkIfLandedInSignUpPage(); //check if the user is in Initial Signup page
      login.fillUserNameFieldSignup(data)
      login.fillEmailFieldSignup(data)
      login.clickSignUpButton(data)
      login.checkSignupErrorMessage()
    })
  })

})
