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

}

export default CartPage;