import 'cypress-xpath'
import CartPageActions from '../pageObject/CartPageObj.spec'
import ProductPageActions from '../pageObject/ProductPageObj.spec';
import ProductDetailPageActions from '../pageObject/ProductDetailPageObj.spec';
import LoginPageActions from '../pageObject/LoginPageObj.spec';
import SignUpPageActions from '../pageObject/SignUpPageObj.spec';
import HomePageActions from '../pageObject/HomePageObj.spec';
import { getRegisterData } from '../utils/registerDataCreator.spec';
import { getFirstProductList } from '../utils/getProducts.spec';
import { writeLoginData } from '../utils/loginDataWriter.spec';


const cartpage = new CartPageActions();
const productpage = new ProductPageActions();
const productdetailpage = new ProductDetailPageActions();
const loginpage = new LoginPageActions();
const signuppage = new SignUpPageActions();
const homepage = new HomePageActions();

let name;

before(() => {
    cy.viewport(1366, 768)
    cy.visit('https://www.automationexercise.com')
    getRegisterData();
    getFirstProductList();
})

describe('Place Order related test cases', () => {

    before(() => {
        cy.fixture('firstProduct.json').then((data) => {
            name = data.name;
        })
    })

    it('Test Case 14: Place Order: Register while Checkout', () => {
        homepage.goToProductsPage();
        productpage.clickAddToCartFirstProduct(name)
        productpage.clickViewCartLink()
        cartpage.clickProceedToCheckoutButton();
        cartpage.clickRegisterLoginLink();


        cy.fixture('registerData.json').then((data) => {
            loginpage.fillUserNameFieldSignup(data)
            loginpage.fillEmailFieldSignup(data)
            loginpage.clickSignUpButton()

            signuppage.checkHeaderInFullSignUpPage()
            signuppage.selectTitle()
            signuppage.fillPasswordField(data)
            signuppage.fillDOBFields()
            signuppage.fillAddressInformationFields(data)
            signuppage.clickCreateAccountButton()
            signuppage.checkIfAccountCreated();
            writeLoginData(data.email,data.password,data.userName);
            signuppage.clickContinueButton()

            homepage.verifyLoggedInUser(data.userName)

            homepage.goToCartPage()
            cartpage.clickProceedToCheckoutButton()

        })

    })





})