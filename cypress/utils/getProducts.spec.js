export function getProductList() {
  cy.request('https://automationexercise.com/api/productsList').then((response) => {
    expect(response.status).to.eq(200)
    cy.log(JSON.stringify(response.headers))
cy.log(JSON.stringify(response.body))
const prods = JSON.parse(response.body)
cy.log(prods.products[0].name)

  })
}
