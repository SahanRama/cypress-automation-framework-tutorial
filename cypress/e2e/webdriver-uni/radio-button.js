///  <reference types ="Cypress"/>

describe('Verify radio buttons via webdirveruni', () => {
    beforeEach(function () {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    })

    it('Check specific radio button interactions', () => {

        cy.get('#radio-buttons').find('[type="radio"]').first().check()
        cy.get('#radio-buttons').find('[type="radio"]').eq(1).check()

        cy.get('#radio-buttons').find('[type="radio"]').check('orange')
    })

    it('Validate the states of specific radio buttons', () => {

        cy.get('[value="lettuce"]').should('not.be.checked')
        cy.get('[value="pumpkin"]').should('be.checked')

        cy.get('[value="lettuce"]').check()
        cy.get('[value="lettuce"]').should('be.checked')
        cy.get('[value="pumpkin"]').should('not.be.checked')

        cy.get('[value="cabbage"]').should('be.disabled')

        cy.get('[value="cabbage"]').check({ force: true })
        cy.get('[value="lettuce"]').should('not.be.checked')
        cy.get('[value="pumpkin"]').should('not.be.checked')
    })


})