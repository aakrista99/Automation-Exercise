class ContactPage{

    getContactUsText(){
        return cy.xpath('//h2[@class="title text-center" and contains(text(),"Get In Touch")]')
    }

    getNameField(){
        return cy.xpath('//input[@data-qa="name"]')
    }

    getEmailField(){
        return cy.xpath('//input[@data-qa="email"]')
    }

    getSubjectField(){
        return cy.xpath('//input[@data-qa="subject"]')
    }

    getMessageTextArea(){
        return cy.xpath('//textarea[@data-qa="message"]')
    }

    getFileUploadButton(){
        return cy.xpath('//input[@name="upload_file"]')
    }

    getSubmitButton(){
        return cy.xpath('//input[@data-qa="submit-button"]')
    }
    
    getSuccessMessage(){
        return cy.xpath('//div[@class="status alert alert-success"]')
    }
}

export default ContactPage;