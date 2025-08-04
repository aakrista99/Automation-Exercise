class CartPage{

    getCartSubscriptionHeader(){
        return cy.xpath('//div[@class="single-widget"]//h2')
    }
    
    getCartSubscriptionEmailField(){
        return cy.xpath('//input[@id="susbscribe_email"]')
    }

    getCartSubscriptionSuccessMessage(){
        return cy.xpath('//div[@class="alert-success alert"]')
    }

}

export default CartPage;