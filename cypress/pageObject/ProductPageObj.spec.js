import ProductPage from "../page/ProductPage.spec";

const productPageObj = new ProductPage();

class ProductPageActions{

    checkAllProductsVisibility(){
        productPageObj.getAllProductsHeader().should('be.visible')
    }

    checkCategoryHeaderVisibility(){
        productPageObj.getCategoryHeader().should('be.visible')
    }

    checkBrandsHeaderVisibility(){
        productPageObj.getBrandsHeader().should('be.visible')
    }

    clickOnViewProductOfFirstProduct(data){
        productPageObj.getViewProductOfFirstItem(data).click()
    }

    enterSearchText(data){
        productPageObj.getSearchBox().type(data)
    }

    clickOnSearchButton(){
        productPageObj.getSearchButton().click()
    }

    checkIfSearchedProductIsVisible(data){
        productPageObj.getSearchedProduct(data).should('be.visible')
    }

}

export default ProductPageActions;