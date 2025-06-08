import 'cypress-xpath'
import LoginPage from '../page/LoginPage.spec.js'
import SignUpPage from '../page/SignUpPage.spec.js'
import { getRegisterData } from '../utils/registerDataCreator.spec.js'

describe('Register/Login', () => {

  before(() => {
    getRegisterData()
    cy.viewport(1920, 1080)
    cy.visit('https://www.automationexercise.com/')
  })

  it('Registers user', () => {
    const LoginObj = new LoginPage()

    cy.xpath('//a[contains(text(),"Signup / Login")]').click()
    cy.xpath('//h2').contains('New User Signup!').should('be.visible')

    LoginObj.userNameField()
    LoginObj.emailField()
    LoginObj.signUpButton()

    cy.xpath('//h2/b').contains('Enter Account Information').should('be.visible')

    const signUpObj = new SignUpPage()

    signUpObj.title()
    signUpObj.password()
    signUpObj.dob()
    signUpObj.addressInformation()
    signUpObj.createAccountBtn()

      cy.xpath('//h2/b').contains('Account Created!').should('be.visible')
    
  })

})
