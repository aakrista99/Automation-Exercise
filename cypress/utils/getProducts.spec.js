export function getFirstProductList() {

    cy.request('https://automationexercise.com/api/productsList').then((response)=>{
        cy.log(response.body) //response received as JSON string
        const jsonData = JSON.parse(response.body) //converted JSON string to javascript object
        cy.log(jsonData.products[0].name)
        const firstProduct = JSON.stringify(jsonData.products[0]) //First product related info
        cy.writeFile('cypress/fixtures/firstProduct.json',firstProduct) //storing data inside fixtures
    })

}


export function getAllProductList() {

    cy.request('https://automationexercise.com/api/productsList').then((response)=>{
        cy.log(response.body) //response received as JSON string
        const jsonData = JSON.parse(response.body) //converted JSON string to javascript object
        const allProducts = JSON.stringify(jsonData.products) //First product related info
        cy.writeFile('cypress/fixtures/allProducts.json',allProducts) //storing data inside fixtures
    })

}

