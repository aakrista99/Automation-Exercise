import CartPage from "../page/CartPage.spec";

const cartPageObj = new CartPage;

class CartPageActions{

    checkCartSubscriptionHeader(){
        cartPageObj.getCartSubscriptionHeader().should('have.text','Subscription')
    }

    submitCartSubscriptionEmail(){
        cartPageObj.getCartSubscriptionEmailField().type('test@gmail.com{enter}')
    }

    checkCartSubscriptionSuccessMessage(){
        cartPageObj.getCartSubscriptionSuccessMessage().should('have.text','You have been successfully subscribed!')
    }

}

export default CartPageActions;