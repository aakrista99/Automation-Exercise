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