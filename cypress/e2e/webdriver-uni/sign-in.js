/// <reference types= "Cypress"/>

describe('Sign in', () => {
    it.skip('sign in to moments', () => {
        cy.visit("https://moments.pastbook.com/")
        cy.get('#nav-item-signin > a ')
        .invoke("removeAttr","target").invoke("removeAttr","data-signin")
        .click()
        cy.log("navigated to the sign in page")

        
    });
});