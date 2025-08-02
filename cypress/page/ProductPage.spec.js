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
}

export default ProductPage;