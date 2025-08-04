import 'cypress-xpath'
import HomePageActions from '../pageObject/HomePageObj.spec'
import CartPageActions from '../pageObject/CartPageObj.spec'

beforeEach(()=>{
    cy.viewport(1366,768)
    cy.visit('https://www.automationexercise.com')
})

const homepage = new HomePageActions();
const cartpage = new CartPageActions();

describe('Subscription related test cases',()=>{

    it('Test Case 10: Verify Subscription in home page',()=>{
        homepage.checkIfSubscriptionHeaderIsVisible()
        homepage.submitSubscriptionEmail()
        homepage.checkSubscriptionSuccessMessage()
    })

    it('Test Case 11: Verify Subscription in Cart page',()=>{
        homepage.goToCartPage()
        cartpage.checkCartSubscriptionHeader()
        cartpage.submitCartSubscriptionEmail()
        cartpage.checkCartSubscriptionSuccessMessage()
    })

})