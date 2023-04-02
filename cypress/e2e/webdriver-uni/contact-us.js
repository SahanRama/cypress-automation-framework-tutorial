import HomePage_PO from "../../support/pageObject/webdriver-uni/HomePage_PO"
import ContactUsPage_PO from "../../support/pageObject/webdriver-uni/ContactUsPage_PO"
/// <reference types="Cypress" />


describe("Test Contact us form in WebdriverUni portal",() => {
    Cypress.config('defaultCommandTimeout',20000)
    const homePage = new HomePage_PO();
    const contactUsPage = new ContactUsPage_PO();
    before(function(){
        cy.fixture('example.json').then(function(data){
            //this.data =data
            globalThis.data = data
        })
    })
    beforeEach(function(){
        homePage.visitHomPage();
        homePage.navigateToContactUsPage();
    })

    it("Verify user should be able to submit a successful submition via contact us form", () => {

        cy.document().should('have.property','charset').and ('eq','UTF-8')
        cy.title().should('include','WebDriver | Contact Us')
        cy.url().should('include','contactus')
        contactUsPage.webdriverUni_ContactForm_Submission(Cypress.env('firstName'),data.last_name,data.email,data.comment,'h1','Thank You for your Message!')
        //cy.webdriverUni_ContactForm_Submission(Cypress.env('firstName'),data.last_name,data.email,data.comment,'h1','Thank You for your Message!')

    });

    it("Verify user should not be able to submit a successful submition via contact us form as all fields are requred", () => {

        // cy.get('[name="first_name"]').type(data.first_name)
        // cy.get('[name="last_name"]').type(data.last_name)
        // cy.get('[name="message"]').type("This is a comment to add to the contact us page")
        // cy.get('[type="submit"]').click()
        // cy.get('body').contains('Error: all fields are required')

        cy.webdriverUni_ContactForm_Submission(data.first_name,data.last_name," ",data.comment,'body','Error: Invalid email address')
    });

    it("Verify user should be able to submit a successful submition via contact us form without Page object", () => {

        cy.document().should('have.property','charset').and ('eq','UTF-8')
        cy.title().should('include','WebDriver | Contact Us')
        cy.url().should('include','contactus')
        //cy.pause()
        cy.get('[name="first_name"]').type(data.first_name)
        cy.get('[name="last_name"]').type(data.last_name)
        cy.get('[name="email"]').type(data.email)
        cy.get('[name="message"]').type("This is a comment to add to the contact us page")
        cy.get('[type="submit"]').click({timeout:8000}) // timeout wait override
        cy.get('h1').should('have.text','Thank You for your Message!',{timeout:60000})
        cy.screenshot();

    });
})