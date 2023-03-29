/// <reference types="Cypress" />

describe("Test Contact us form in WebdriverUni portal",() => {
    it("Verify user should be able to submit a successful submition via contact us form", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.document().should('have.property','charset').and ('eq','UTF-8')
        cy.title().should('include','WebDriver | Contact Us')
        cy.url().should('include','contactus')
        //cy.get('#contact-us').click()
        cy.get('[name="first_name"]').type("Sahan")
        cy.get('[name="last_name"]').type("Ramanayake")
        cy.get('[name="email"]').type("test@test.com")
        cy.get('[name="message"]').type("This is a comment to add to the contact us page")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    });

    it("Verify user should not be able to submit a successful submition via contact us form as all fields are requred", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Sahan")
        cy.get('[name="last_name"]').type("Ramanayake")
        cy.get('[name="message"]').type("This is a comment to add to the contact us page")
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
    });
})