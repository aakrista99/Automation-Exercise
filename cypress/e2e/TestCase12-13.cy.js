import 'cypress-xpath';
import HomePageActions from '../pageObject/HomePageObj.spec';
import ProductPageActions from '../pageObject/ProductPageObj.spec';
import CartPageActions from '../pageObject/CartPageObj.spec';
import { getAllProductList } from '../utils/getProducts.spec';
import ProductDetailPageActions from '../pageObject/ProductDetailPageObj.spec';

const homepage = new HomePageActions();
const productpage = new ProductPageActions();
const productdetailpage = new ProductDetailPageActions();
const cartpage = new CartPageActions();

let name, price, secondname, secondprice, priceNumber;

beforeEach(() => {
    cy.viewport(1366, 768)
    cy.visit('https://www.automationexercise.com/')
    getAllProductList();
})

describe('Cart Related Test Cases', () => {
    before(() => {
        cy.fixture('firstProduct.json').then((data) => {
            name = data.name;
            price = data.price;
            priceNumber = parseInt(price.replace('Rs. ', '')) //removing 'Rs. ' from the data
        })
        cy.fixture('allProducts.json').then((data) => {
            secondname = data[1].name;
            secondprice = data[1].price;
        })
    })

    it('Test Case 12: Add Products in Cart', () => {
        homepage.goToProductsPage()
        productpage.clickAddToCartFirstProduct(name)
        productpage.checkAddedToCartVisibility()
        productpage.clickContinueShoppingButton()
        productpage.clickAddToCartSecondProduct(name)

        productpage.addToCartMultipleTimes(name).then((count) => {
            cy.log(`Product was added ${count} times`);
            productpage.clickViewCartLink()
            cartpage.checkCartItemQuantity(name, count)
            cy.log(name)
            cy.log(priceNumber)
            cartpage.checkCartTotal(name, priceNumber * (count + 1))
        });



        cartpage.checkCartCount()

        cartpage.checkCartItemDescription(name)
        cartpage.checkCartItemDescription(secondname)

        cartpage.checkCartItemPrice(name, price)
        cartpage.checkCartItemPrice(secondname, secondprice)

    })


    it('Test Case 13: Verify Product quantity in Cart', () => {
        homepage.goToProductsPage()
        productpage.clickOnViewProductOfFirstProduct(name)

        cy.log('Checking if user is navigated to Product detail page')
        productdetailpage.checkProductName(name)
        productdetailpage.checkProductPrice(price)

        const quantity = 4
        productdetailpage.increaseQuantity(quantity)
        productdetailpage.clickAddToCartButton()

        productpage.clickViewCartLink()
        cartpage.checkCartItemQuantity(name, quantity - 1)   //quantity-1 because we have done count+1 in checkCartItemQuantity method by default
    })

})