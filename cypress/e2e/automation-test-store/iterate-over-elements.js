/// <reference types = "Cypress"/>

describe("Iterate over elements", () => {
    it("Log information of all hair care products", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('a[href*="roduct/category&path"]').contains("Hair Care").click()
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("index :" + index + ": " + $el.text())
        })

    })
    it("Add specific product to cart", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('a[href*="roduct/category&path"]').contains("Hair Care").click()

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            if($el.text().includes('Curls to straight Shampoo')){
                cy.wrap($el).click()
            }
        })

    })

})