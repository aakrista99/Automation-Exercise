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

}

export default ProductPageActions;