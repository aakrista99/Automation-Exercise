class ProductPage {

    getAllProductsHeader() {
        return cy.xpath('//h2[contains(text(),"All Products")]')
    }

    getCategoryHeader() {
        return cy.xpath('//h2[contains(text(),"Category")]')
    }

    getBrandsHeader() {
        return cy.xpath('//h2[contains(text(),"Brands")]')
    }

    getFirstItemBox(data){
        return cy.xpath(`//p[contains(text(),"${data}")]//ancestor::div[@class="single-products"]`)
    }

    getFirstItemBoxOverlayAddToCart(data){
        return cy.xpath(`//div[@class="overlay-content"]//p[contains(text(),"${data}")]//following-sibling::a[contains(text(),"Add to cart")]`)
    }

    getSecondItemBox(data){
        return cy.xpath(`(//p[contains(text(),"${data}")]//ancestor::div[@class="col-sm-4"])//following-sibling::div[@class="col-sm-4"]`)
    }

    getSecondItemBoxOverlayAddToCart(){
        return cy.xpath('//div[@class="product-overlay"]//a[@data-product-id="2" and contains(text(),"Add to cart")]')
    }

    getItemAddedToCartModal(){
        return cy.xpath('//div[@class="modal-content"]')
    }

    getViewCartLink(){
        return cy.xpath('//u[text()="View Cart"]')
    }

    getContinueShoppingButton(){
        return cy.xpath('//button[text()="Continue Shopping"]')
    }

    getViewProductOfFirstItem(data) {
        return cy.xpath(`//p[contains(text(),"${data}")]//ancestor::div[@class="single-products"]//following-sibling::div[@class="choose"]//a[text()="View Product"]`)
    }

    getSearchBox(){
        return cy.xpath('//input[@id="search_product"]')
    }

    getSearchButton(){
        return cy.xpath('//button[@id="submit_search"]')
    }

    getSearchedProduct(data){
        return cy.xpath(`//div[@class="single-products"]//p[contains(text(),"${data}")]`)
    }

}

export default ProductPage;