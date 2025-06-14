export function writeLoginData(email, password) {
    let loginData = {
        email,
        password
    };
    cy.writeFile('cypress/fixtures/loginData.json', loginData)
}