import CartPage from "../page/CartPage.spec";

const cartPageObj = new CartPage;

class CartPageActions{

    checkCartCount(){
        cartPageObj.getRowsAfterAddToCart().should('have.length',2)
    }

    checkCartItemDescription(data){
        cartPageObj.getCartItemDescription(data).should('be.visible')
    }

    checkCartItemPrice(data,price){
        cartPageObj.getCartItemPrice(data).should('contain.text',price)
    }

    checkCartItemQuantity(data,count){
        cartPageObj.getCartItemQuantity(data).should('have.text',count+1) //count+1 because we add single product once before multiple times
    }

    checkCartTotal(data,total){
        cartPageObj.getCartTotal(data).should('contain.text',total)
    }

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