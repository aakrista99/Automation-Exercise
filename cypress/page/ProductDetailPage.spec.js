class ProductDetailPage{

    getProductName(){
        return cy.xpath('//div[@class="product-information"]//h2')
    }

    getProductCategory(){
        return cy.xpath('//p')
    }

    getProductPrice(){
        return cy.xpath('//label//preceding-sibling::span')
    }

    getQuantity(){
        return cy.xpath('//input[@id="quantity"]')
    }

    getAddToCartButton(){
        return cy.xpath('//button[@class="btn btn-default cart"]')
    }

    getProductAvailability(){
        return cy.xpath('//b[text()="Availability:"]')
    }

    getProductCondition(){
        return cy.xpath('//b[text()="Condition:"]')
    }

    getProductBrand(data){
        return cy.xpath(`//p[b[text()='Brand:'] and contains(., "${data}")]`)
    }
}

export default ProductDetailPage;