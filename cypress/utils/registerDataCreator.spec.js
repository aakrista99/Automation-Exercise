import { faker } from '@faker-js/faker';

faker.locale = 'en_IN'

export function getRegisterData(){
    let userData = {
        userName : faker.person.fullName(),
        email : faker.internet.email(),
        fullName : faker.person.fullName(),
        password : faker.internet.password(),
        addressFirstName : faker.person.firstName(),
        addressLastName : faker.person.lastName(),
        address : faker.location.streetAddress(),
        state : faker.location.state(),
        city : faker.location.city(),
        zip : faker.location.zipCode(),
        mobileNumber : faker.phone.number()
    }
    cy.writeFile('cypress/fixtures/registerData.json',userData);
    return userData;
}
