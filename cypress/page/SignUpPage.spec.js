class SignUpPage {

    landSignUpPage(){
    return cy.xpath('//h2').contains('New User Signup!')
    }
    
    headerInSignUpPage(){
        return cy.xpath('//h2/b').contains('Enter Account Information')
    }

    getTitle() {
        return cy.xpath('//div[@data-qa="title"]//input[@id="id_gender1"]')
    }

    getPasswordField(data) {
        return cy.xpath('//input[@data-qa="password"]')
    }

    getDOBField(type) {
        const xpaths = {
            day: '//select[@data-qa="days"]',
            month: '//select[@data-qa="months"]',
            year: '//select[@data-qa="years"]'
        }
        return cy.xpath(xpaths[type]);
    }

    //alternative approach for DOB start
    getDayDropdown() {
        return cy.xpath('//select[@data-qa="days"]').select('1')
    }

    getMonthDropdown() {
        return cy.xpath('//select[@data-qa="months"]').select('1')
    }

    getYearDropdown() {
        return cy.xpath('//select[@data-qa="years"]').select('2015')
    }
    //alternative approach for DOB end

    getAddressInformationFields(data) {
        const xpaths = {
            firstName: '//input[@data-qa="first_name"]',
            lastName: '//input[@data-qa="last_name"]',
            company: '//input[@data-qa="company"]',
            address: '//input[@data-qa = "address"]',
            country: '//select[@data-qa="country"]',
            state: '//input[@data-qa="state"]',
            city: '//input[@data-qa="city"]',
            zipCode: '//input[@data-qa="zipcode"]',
            mobileNumber: '//input[@data-qa="mobile_number"]'
        }
        return cy.xpath(xpaths[data]);
        // return cy.xpath('//input[@data-qa="first_name"]').type(data.addressFirstName);
        // return cy.xpath('//input[@data-qa="last_name"]').type(data.addressLastName);
        // return cy.xpath('//input[@data-qa="company"]').type('Sadio');
        // return cy.xpath('//input[@data-qa="address"]').type(data.address);
        // return cy.xpath('//select[@data-qa="country"]').select('India');
        // return cy.xpath('//input[@data-qa="state"]').type(data.state);
        // return cy.xpath('//input[@data-qa="city"]').type(data.city);
        // return cy.xpath('//input[@data-qa="zipcode"]').type(data.zip);
        // return cy.xpath('//input[@data-qa="mobile_number"]').type(data.mobileNumber);
    }


    getCreateAccountButton() {
        return cy.xpath('//button[@data-qa="create-account"]')
    }

    getContinueButton() {
        return cy.xpath('//a[@data-qa = "continue-button"]')
    }

    getAccountCreatedText(){
        return cy.xpath('//h2/b').contains('Account Created!')
    }
}

export default SignUpPage;