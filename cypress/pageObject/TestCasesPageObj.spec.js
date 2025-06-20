import TestCasesPage from "../page/TestCasesPage.spec";

const testCasesPage = new TestCasesPage();

class TestCasesPageObjects{
    checkTestCasesTitle(){
        testCasesPage.getTestCasesTitle().should('be.visible')
    }
}

export default TestCasesPageObjects;