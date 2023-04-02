/// <reference types="Cypress" />


describe("Test Contact us form in automation test store portal", () => {
    before(function () {
        cy.fixture('userDetail').as('user')
        cy.viewport('iphone-x')
    })
    it("Verify user should be able to submit a successful submition via contact us form", () => {
        cy.visit("https://automationteststore.com/");
        //cy.get("a[href$='contact']").click();
        cy.xpath("//a[contains(@href,'contact')]").click().then(function (clickedOnButton) {
            cy.log("You have clicked on the " + clickedOnButton.text() + " button")
        })
        cy.get('@user').then(function (user) {
            cy.get('#ContactUsFrm_first_name').type(user.first_name);
            cy.get('#ContactUsFrm_email').type(user.email);
        })

        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type("Do you do discounts on bulk purchase?");
        cy.get('button[title="Submit"]').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
    });
})