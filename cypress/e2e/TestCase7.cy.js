import 'cypress-xpath'
import TestCasesPageObjects from '../pageObject/TestCasesPageObj.spec'
import HomePageActions from '../pageObject/HomePageObj.spec'


before(()=>{
    cy.visit('https://www.automationexercise.com')
    cy.viewport(1366,768)
})

it('Test Case 7 : Verify Test Cases Page', ()=>{
    const homepage = new HomePageActions;
    const testCases = new TestCasesPageObjects();

    homepage.goToTestCasesPage();
    testCases.checkTestCasesTitle();

    cy.url().should('contain','test_cases') //partial comparision
    cy.url().should('eq','https://www.automationexercise.com/test_cases') //strict comparision

})