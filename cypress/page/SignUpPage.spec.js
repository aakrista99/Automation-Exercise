class SignUpPage {

    title() {
        cy.xpath('//div[@data-qa="title"]//input[@id="id_gender1"]').click().should('be.checked')
    }

    password(data) {
        cy.xpath('//input[@data-qa="password"]').type(data.password)
    }

    dob() {
        cy.xpath('//select[@data-qa="days"]').select('1')
        cy.xpath('//select[@data-qa="months"]').select('1')
        cy.xpath('//select[@data-qa="years"]').select('2015')

    }

    addressInformation(data) {
        cy.xpath('//input[@data-qa="first_name"]').type(data.addressFirstName);
        cy.xpath('//input[@data-qa="last_name"]').type(data.addressLastName);
        cy.xpath('//input[@data-qa="company"]').type('Sadio');
        cy.xpath('//input[@data-qa="address"]').type(data.address);
        cy.xpath('//select[@data-qa="country"]').select('India');
        cy.xpath('//input[@data-qa="state"]').type(data.state);
        cy.xpath('//input[@data-qa="city"]').type(data.city);
        cy.xpath('//input[@data-qa="zipcode"]').type(data.zip);
        cy.xpath('//input[@data-qa="mobile_number"]').type(data.mobileNumber);
    }


    createAccountBtn() {
        cy.xpath('//button[@data-qa="create-account"]').click()
    }

    continueButton(){
        cy.xpath('//a[@data-qa = "continue-button"]').click()
    }

}

export default SignUpPage;