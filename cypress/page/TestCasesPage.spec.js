class TestCasesPage {

    getTestCasesTitle(data) {
        return cy.xpath('//b[text()="Test Cases"]')
    }

}

export default TestCasesPage;