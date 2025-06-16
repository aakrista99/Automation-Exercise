import 'cypress-xpath'
import { getRegisterData } from '../utils/registerDataCreator.spec.js'
import { writeLoginData } from '../utils/loginDataWriter.spec.js'
import HomePageActions from '../pageObject/HomePageObj.spec.js'
import LoginPageActions from '../pageObject/LoginPageObj.spec.js'
import SignUpPageActions from '../pageObject/SignUpPageObj.spec.js'

describe('Register/Login', () => {

  before(() => {
    getRegisterData(); //create the registration data using utils/registerDataCreator.spec.js

    cy.viewport(1366, 768)
    cy.visit('https://www.automationexercise.com/')
  })

  it('Test Case 1 : Register user', () => {

    cy.fixture('registerData.json').then((data) => { //read registerData.json created from getRegisterData() and read its content as 'data' for further use
      const login = new LoginPageActions()
      const signUp = new SignUpPageActions()
      const home = new HomePageActions()

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
      home.clickDeleteAccount();
      home.checkIfAccountDeleted(); //check if account is deleted successfully
    })

  })
})
