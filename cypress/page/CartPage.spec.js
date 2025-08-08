class CartPage{

    getRowsAfterAddToCart(){
        return cy.xpath('//tbody//tr')
    }

    getCartItemDescription(data){
        return cy.xpath(`//h4//a[text()="${data}"]`)
    }

    getCartItemPrice(data){
        return cy.xpath(`//a[text()="${data}"]//ancestor::td[@class="cart_description"]//following-sibling::td[@class="cart_price"]//p`)
    }

    getCartItemQuantity(data){
        return cy.xpath(`//a[text()="${data}"]//ancestor::td[@class="cart_description"]//following-sibling::td[@class="cart_quantity"]//button`)
    }

    getCartTotal(data){
        return cy.xpath(`//a[text()="${data}"]//ancestor::td[@class="cart_description"]//following-sibling::td[@class="cart_total"]//p`)
    }

    getCartSubscriptionHeader(){
        return cy.xpath('//div[@class="single-widget"]//h2')
    }
    
    getCartSubscriptionEmailField(){
        return cy.xpath('//input[@id="susbscribe_email"]')
    }

    getCartSubscriptionSuccessMessage(){
        return cy.xpath('//div[@class="alert-success alert"]')
    }

    getProceedToCheckoutButton(){
        return cy.xpath('//a[@class="btn btn-default check_out"]')
    }

    getCheckoutModal(){
        return cy.xpath('//div[@class="modal-content"]//h4')
    }

    getRegisterLoginLink(){
        return cy.xpath('//u[text()="Register / Login"]')
    }

    getContinueOnCartButton(){
        return cy.xpath('//button[text()="Continue On Cart"]')
    }
    
}

export default CartPage;