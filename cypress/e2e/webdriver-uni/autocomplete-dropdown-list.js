///  <reference types ="Cypress"/>

describe('Verify autocomplete list via webdriveruni', () => {
    it('Selet specific product via autocomplete list', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click()

        cy.get('#myInput').type('G')
        cy.get('#myInputautocomplete-list > *').each(($ele) => {
            const foods = $ele.text()
            const nameOfProduct = 'Ginger'
            if (foods === nameOfProduct) {
                cy.wrap($ele).click()
                cy.get('#submit-button').click()
                cy.url().should('include', nameOfProduct)
            }

        }).then(() => {
            cy.get('#myInput').type('A')
            cy.get('#myInputautocomplete-list > *').each(($ele) => {
                const foods = $ele.text()
                const nameOfProduct = 'Avacado'
                if (foods === nameOfProduct) {
                    cy.wrap($ele).click()
                    cy.get('#submit-button').click()
                    cy.url().should('include', nameOfProduct)
                }
            })
        })
    })

})