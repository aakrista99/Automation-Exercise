import 'cypress-xpath'
import LoginPage from '../page/LoginPage.spec.js'
import SignUpPage from '../page/SignUpPage.spec.js'
import { getRegisterData } from '../utils/registerDataCreator.spec.js'
import { writeLoginData } from '../utils/loginDataWriter.spec.js'
import HomePage from '../page/HomePage.spec.js'

describe('Register/Login', () => {

  before(() => {
    getRegisterData(); //create the registration data using utils/registerDataCreator.spec.js

    cy.viewport(1920, 1080)
    cy.visit('https://www.automationexercise.com/')
  })

  it('Test Case 1 : Register user', () => {
    
    cy.fixture('registerData.json').then((data) => { //read registerData.json created from getRegisterData() and read its content as 'data' for further use
      const LoginObj = new LoginPage()
      const signUpObj = new SignUpPage()
      const homePageObj = new HomePage()

      cy.xpath('//a[contains(text(),"Signup / Login")]').click()
      cy.xpath('//h2').contains('New User Signup!').should('be.visible') //check if the user is in SignUp page

      LoginObj.userNameField(data)
      LoginObj.emailField(data)
      LoginObj.signUpButton(data)

      cy.xpath('//h2/b').contains('Enter Account Information').should('be.visible') //check if user is in Full Signup Page

      signUpObj.title()
      signUpObj.password(data)
      signUpObj.dob()
      signUpObj.addressInformation(data)
      signUpObj.createAccountBtn()

      cy.xpath('//h2/b').contains('Account Created!').should('be.visible')

      writeLoginData(data.email,data.password); //writes the email and password of user used to register, in loginData.json

      signUpObj.continueButton();
      homePageObj.loggedInUser(data.userName);
      homePageObj.deleteAccount();
      cy.xpath('//h2[@data-qa="account-deleted"]').should('be.visible')
    })

  })
})
