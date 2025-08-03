import 'cypress-xpath'
import HomePageActions from '../pageObject/HomePageObj.spec'
import ProductPageActions from '../pageObject/ProductPageObj.spec'
import ProductDetailPageActions from '../pageObject/ProductDetailPageObj.spec'

let name, usertype, category, price, brand;

const homePage = new HomePageActions();
const productPage = new ProductPageActions();
const productDetailPage = new ProductDetailPageActions();

beforeEach(() => {
    cy.visit('https://www.automationexercise.com')
    cy.viewport(1366, 768)
})

describe('Product Related actions', () => {

    before(() => {
        cy.fixture('firstProduct.json').then((data) => {
            name = data.name;
            usertype = data.category.usertype.usertype;
            category = data.category.category;
            price = data.price;
            brand = data.brand;
        });
    });


    it('Test Case 8 : Verify All Products and product detail page', () => {

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

    it('Test Case 9: Search Product',()=>{
        homePage.goToProductsPage();
        productPage.checkAllProductsVisibility(); //check if All Products header is visible
        productPage.checkCategoryHeaderVisibility(); //check if Category header is visible
        productPage.checkBrandsHeaderVisibility(); //check if Brands header is visible

        productPage.enterSearchText(name)
        productPage.clickOnSearchButton();
        productPage.checkIfSearchedProductIsVisible(name);
    })

})
