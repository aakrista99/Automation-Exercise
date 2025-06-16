export function writeLoginData(email, password, userName) {
    let loginData = {
        email,
        password,
        userName
    };
    cy.writeFile('cypress/fixtures/loginData.json', loginData)
}