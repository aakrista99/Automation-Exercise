import 'cypress-xpath';
import HomePageActions from '../pageObject/HomePageObj.spec';
import ProductPageActions from '../pageObject/ProductPageObj.spec';
import CartPageActions from '../pageObject/CartPageObj.spec';
import { getAllProductList } from '../utils/getProducts.spec';


const homepage = new HomePageActions();
const productpage = new ProductPageActions();
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

})