///  <reference types ="Cypress"/>

describe('Verify checkboxes via webdirveruni', () => {
    it('check and validate checkboxes', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()

        //cy.get('#checkboxes > :nth-child(1) > input').check()
        cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
    })
    it('Validate the uncheck of the checkbox', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.get(':nth-child(5) > input').uncheck().should('not.be.checked')
    })
    it('Validate checking of all the checkboxes', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.get('input[type="checkbox"]').check().should('be.checked')
    })

    it.only('Validate checking of boxes in the checkboxes', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.get('input[type="checkbox"]').as('checkbox')
        cy.get('@checkbox').check(['option-1','option-2']).should('be.checked').and('not.have.value','option-4')
    })

})