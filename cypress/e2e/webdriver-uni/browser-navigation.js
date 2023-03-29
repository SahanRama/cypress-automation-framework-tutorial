/// <reference types="Cypress" />

describe("Validate webdriver uni homepage links", () => {
    it("Confirm links redirect to the correct page", () => {
        //cypress code
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'contactus')
        
        cy.go('back')
        cy.reload()
        //cy.reload(true) //reload witout using cache

        cy.go('forward')
        cy.url().should('include', 'contactus')
        cy.go('back')

        cy.get('#to-do-list').invoke('removeAttr', 'target').click()
        cy.url().should('contain','To-Do-List')
        cy.go('back')

    });
})