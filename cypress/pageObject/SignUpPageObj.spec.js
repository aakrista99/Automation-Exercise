import SignUpPage from "../page/SignUpPage.spec";

const signUpObj = new SignUpPage();

class SignUpPageActions {

    checkIfLandedInSignUpPage(){
        signUpObj.landSignUpPage().should('be.visible')
    }

    checkHeaderInFullSignUpPage(){
        signUpObj.headerInSignUpPage().should('be.visible')
    }
    
    selectTitle() {
        signUpObj.getTitle().click().should('be.checked');
    }

    fillPasswordField(data) {
        signUpObj.getPasswordField(data).type(data.password)
    }

    fillDOBFields() {
        signUpObj.getDOBField('day').select('2')
        signUpObj.getDOBField('month').select('4')
        signUpObj.getDOBField('year').select('1999')
    }

    fillAddressInformationFields(data) {
        signUpObj.getAddressInformationFields('firstName').type(data.addressFirstName);
        signUpObj.getAddressInformationFields('lastName').type(data.addressLastName);
        signUpObj.getAddressInformationFields('company').type('Sadio');
        signUpObj.getAddressInformationFields('address').type(data.address);
        signUpObj.getAddressInformationFields('country').type('India');
        signUpObj.getAddressInformationFields('state').type(data.state);
        signUpObj.getAddressInformationFields('city').type(data.city);
        signUpObj.getAddressInformationFields('zipCode').type(data.zip);
        signUpObj.getAddressInformationFields('mobileNumber').type(data.mobileNumber);
    }

    clickCreateAccountButton() {
        signUpObj.getCreateAccountButton().click()
    }

    clickContinueButton() {
        signUpObj.getContinueButton().click()
    }

    checkIfAccountCreated(){
        signUpObj.getAccountCreatedText().should('be.visible')
    }
}

export default SignUpPageActions;