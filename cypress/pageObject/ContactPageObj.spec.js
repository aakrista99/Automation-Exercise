import ContactPage from "../page/ContactPage.spec";
const contactPage = new ContactPage();

class ContactPageActions{
    checkIfLandedInContactUsPage(){
        contactPage.getContactUsText().should('be.visible')
    }

    fillNameField(){
        contactPage.getNameField().type(`${Math.floor(2)}`)
    }

    fillEmailField(){
        contactPage.getEmailField().type('johndoe@gmail.com')
    }

    fillSubjectField(){
        contactPage.getSubjectField().type('Automated Message - Do not Reply')
    }

    fillMessageField(){
        contactPage.getMessageTextArea().type('This message can be disregarded.')
    }

    uploadFile(){
        contactPage.getFileUploadButton().selectFile('TestUploadFile.txt')  //TestUploadFile should be in project root folder
    }

    clickSubmitButtonAndConfirm(){
        cy.on('window:confirm',()=>true)  //If confirmation box appears, auto select confirm/true button
        contactPage.getSubmitButton().click()
    }

    verifySuccessMessage(){
        contactPage.getSuccessMessage().should('contain', 'Success! Your details have been submitted successfully')
    }

}

export default ContactPageActions;