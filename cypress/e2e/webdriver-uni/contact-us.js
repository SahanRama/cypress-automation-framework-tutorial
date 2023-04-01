/// <reference types="Cypress" />

describe("Test Contact us form in WebdriverUni portal",() => {
    before(function(){
        cy.fixture('example.json').then(function(data){
            //this.data =data
            globalThis.data = data
        })
    })
    it("Verify user should be able to submit a successful submition via contact us form", () => {

        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.document().should('have.property','charset').and ('eq','UTF-8')
        cy.title().should('include','WebDriver | Contact Us')
        cy.url().should('include','contactus')

        // cy.get('[name="first_name"]').type(data.first_name)
        // cy.get('[name="last_name"]').type(data.last_name)
        // cy.get('[name="email"]').type(data.email)
        // cy.get('[name="message"]').type("This is a comment to add to the contact us page")
        // cy.get('[type="submit"]').click()
        // cy.get('h1').should('have.text','Thank You for your Message!')
        cy.webdriverUni_ContactForm_Submission(data.first_name,data.last_name,data.email,data.comment,'h1','Thank You for your Message!')
    });

    it("Verify user should not be able to submit a successful submition via contact us form as all fields are requred", () => {
       
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        // cy.get('[name="first_name"]').type(data.first_name)
        // cy.get('[name="last_name"]').type(data.last_name)
        // cy.get('[name="message"]').type("This is a comment to add to the contact us page")
        // cy.get('[type="submit"]').click()
        // cy.get('body').contains('Error: all fields are required')

        cy.webdriverUni_ContactForm_Submission(data.first_name,data.last_name," ",data.comment,'body','Error: Invalid email address')
    });
})