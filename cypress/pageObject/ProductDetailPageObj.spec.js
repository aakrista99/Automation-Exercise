import ProductDetailPage from "../page/ProductDetailPage.spec";

const productDetailPageObj = new ProductDetailPage();

class ProductDetailPageActions{

    checkProductName(data){
        productDetailPageObj.getProductName().should('contain.text',data)
    }

    checkProductCategory(usertype,category){
        productDetailPageObj.getProductCategory().should('contain.text',`Category: ${usertype} > ${category}`)
    }

    checkProductPrice(data){
        productDetailPageObj.getProductPrice().should('contain.text',data)
    }

    checkProductAvailability(){
        productDetailPageObj.getProductAvailability().should('be.visible')
    }

    checkProductCondition(){
        productDetailPageObj.getProductCondition().should('be.visible')
    }

    checkProductBrand(data){
        productDetailPageObj.getProductBrand(data).should('be.visible')
    }
}

export default ProductDetailPageActions;