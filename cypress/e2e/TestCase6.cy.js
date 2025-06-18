import 'cypress-xpath';
import ContactPageActions from '../pageObject/ContactPageObj.spec';
import HomePageActions from '../pageObject/HomePageObj.spec';

const home = new HomePageActions();
const contact = new ContactPageActions();

before(()=>{
    cy.visit('https://www.automationexercise.com')
    cy.viewport(1366,768)
})

it('Test Case 6 : Contact Us Form',()=>{
    home.goToContactUsPage();
    contact.checkIfLandedInContactUsPage();
    contact.fillNameField();
    contact.fillEmailField();
    contact.fillSubjectField();
    contact.fillMessageField();
    contact.uploadFile(); //uses selectFile cypress command
    contact.clickSubmitButtonAndConfirm(); //uses cy.on event listener for popup window control
    contact.verifySuccessMessage();
    home.goToHomePage();
    cy.url().should('equal','https://www.automationexercise.com/') //check if user is navigated to homepage by checking exact URL
})