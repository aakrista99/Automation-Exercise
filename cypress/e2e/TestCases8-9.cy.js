import 'cypress-xpath'
import HomePageActions from '../pageObject/HomePageObj.spec'
import ProductPageActions from '../pageObject/ProductPageObj.spec'
import ProductDetailPageActions from '../pageObject/ProductDetailPageObj.spec'

before(() => {
    cy.visit('https://www.automationexercise.com')
    cy.viewport(1366, 768)
})

describe('Product Related actions', () => {


    it('Test Case 8 : Verify All Products and product detail page', () => {
        cy.fixture('firstProduct.json').then((data) => {

            const homePage = new HomePageActions();
            const productPage = new ProductPageActions();
            const productDetailPage = new ProductDetailPageActions();

            var name = data.name;
            var usertype = data.category.usertype.usertype; //for checkProductCategory
            var category = data.category.category; //for checkProductCategory
            var price = data.price;
            var brand = data.brand;


            homePage.goToProductsPage();
            productPage.checkAllProductsVisibility(); //check if All Products header is visible
            productPage.checkCategoryHeaderVisibility(); //check if Category header is visible
            productPage.checkBrandsHeaderVisibility(); //check if Brands header is visible
            productPage.clickOnViewProductOfFirstProduct(name)

            productDetailPage.checkProductName(name)
            productDetailPage.checkProductCategory(usertype, category)
            productDetailPage.checkProductPrice(price)
            productDetailPage.checkProductAvailability()
            productDetailPage.checkProductCondition();
            cy.log(brand)
            productDetailPage.checkProductBrand(brand);
        })
    })
})