import ProductPage from "../page/ProductPage.spec";

const productPageObj = new ProductPage();

class ProductPageActions {

    checkAllProductsVisibility() {
        productPageObj.getAllProductsHeader().should('be.visible')
    }

    checkCategoryHeaderVisibility() {
        productPageObj.getCategoryHeader().should('be.visible')
    }

    checkBrandsHeaderVisibility() {
        productPageObj.getBrandsHeader().should('be.visible')
    }

    clickAddToCartFirstProduct(data) {
        productPageObj.getFirstItemBox(data).trigger('mouseover')  //for hover
        cy.wait(1000)
        productPageObj.getFirstItemBoxOverlayAddToCart(data).click({ force: true })  //because cypress thinkgs its not interactable so force:true tells it to click anyway    
    }

    clickAddToCartSecondProduct(data) {
        (productPageObj.getSecondItemBox(data).first()).trigger('mouseover')  //for hover
        cy.wait(1000);
        productPageObj.getSecondItemBoxOverlayAddToCart().click({ force: true })  //because cypress thinkgs its not interactable so force:true tells it to click anyway
    }

    checkAddedToCartVisibility() {
        productPageObj.getItemAddedToCartModal().should('be.visible')
    }

    clickViewCartLink() {
        productPageObj.getViewCartLink().click()
    }

    clickContinueShoppingButton() {
        productPageObj.getContinueShoppingButton().click()
    }

    addToCartMultipleTimes(data) {
        const count = Math.floor(Math.random() * 10) + 1;
        cy.log(`Adding "${data}" to cart ${count} times`);
        for (let i = 0; i < count; i++) {
            cy.log(`Add #${i + 1}`);
            productPageObj.getFirstItemBox(data).trigger('mouseover');
            cy.wait(1000); // optional but helpful
            productPageObj.getFirstItemBoxOverlayAddToCart(data).click({ force: true });
            this.clickContinueShoppingButton();   //this.clickCon() because we are calling a function within the same class
        }
        return cy.wrap(count);
        // const randomNumber = Math.floor(Math.random()*10) + 1;
        // cy.log(`Adding the product ${randomNumber} times`)
        // cy.wrap(Array.from({ length: randomNumber })).each(() => {
        //     productPageObj.getFirstItemBox(data).trigger('mouseover');
        //     cy.wait(500);
        //     productPageObj.getFirstItemBoxOverlayAddToCart(data).click({ force: true });
        //     this.clickContinueShoppingButton();
        // });
    }

    clickOnViewProductOfFirstProduct(data) {
        productPageObj.getViewProductOfFirstItem(data).click()
    }

    enterSearchText(data) {
        productPageObj.getSearchBox().type(data)
    }

    clickOnSearchButton() {
        productPageObj.getSearchButton().click()
    }

    checkIfSearchedProductIsVisible(data) {
        productPageObj.getSearchedProduct(data).should('be.visible')
    }

}

export default ProductPageActions;