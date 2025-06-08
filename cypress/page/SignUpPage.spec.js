cy.fixture('registerData.json').as('address')

class SignUpPage{

    title(){
        cy.xpath('//div[@data-qa="title"]//input[@id="id_gender1"]').click().should('be.checked').click()
    }

    password(address){
        cy.xpath('//input[@data-qa="password"]').type(address.password)
    }

    dob(){
        cy.xpath('//select[@data-qa="days"]').select('1')
        cy.xpath('//select[@data-qa="months"]').select('1')
        cy.xpath('//select[@data-qa="years"]').select('2015')
    }

    addressInformation(address){
        cy.xpath('//input[@data-qa="first_name"]').type(address.addressFirstName)
        cy.xpath('//input[@data-qa="last_name"]').type(address.addressLastName)
        cy.xpath('//input[@data-qa="company"]').type('Sadio')
        cy.xpath('//input[@data-qa="address"]').type(address.address)
        cy.xpath('//select[@data-qa="country"]').select('India')
        cy.xpath('//input[@data-qa="state"]').type(address.state)
        cy.xpath('//input[@data-qa="city"]').type(address.city)
        cy.xpath('//input[@data-qa="zipcode"]').type(address.zip)
        cy.xpath('//input[@data-qa="mobile_number"]').type(address.mobileNumber)
    }

    createAccountBtn(){
        cy.xpath('//button[@data-qa="create-account"]').click()
    }
}

export default SignUpPage;