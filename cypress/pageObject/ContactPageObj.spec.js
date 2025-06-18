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
        contactPage.getFileUploadButton().selectFile('TestUploadFile.txt')
    }

    clickSubmitButtonAndConfirm(){
        cy.on('window:confirm',()=>true)
        contactPage.getSubmitButton().click()
    }

    verifySuccessMessage(){
        contactPage.getSuccessMessage().should('contain', 'Success! Your details have been submitted successfully')
    }

}

export default ContactPageActions;