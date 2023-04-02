/// <reference types = "Cypress"/>

before(function(){
    cy.fixture('products').then(function(data){
        globalThis.data=data
    })
})
beforeEach(function () {
    cy.visit("https://automationteststore.com/")
    cy.get('a[href*="roduct/category&path"]').contains("Hair Care").click()
})

describe("Add multiple products to card", () => {
    it("Add specific products to card", () => {
        globalThis.data.productName.foreEach(function(name){
            cy.addProductsToCart(name)
        })

    })

})