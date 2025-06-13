class HomePage{

    loggedInUser(user){
        cy.xpath('//i[@class="fa fa-user"]//ancestor::a').should('contain',user)
    }

    deleteAccount(){
        cy.xpath('//a[@href="/delete_account"]').click()
    }

}

export default HomePage;