///  <reference types ="Cypress"/>

describe('Interact with dropdown lists via webdirveruni', () => {
    it('Selet specific values via select dropdown lists', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()

        cy.get('#dropdowm-menu-1').select('python')
        cy.get('#dropdowm-menu-2').select('TestNG')
        cy.get('#dropdowm-menu-3').select('javascript').should('have.value','javascript')

        cy.get('select#dropdowm-menu-1 option:selected').should('have.text', 'Python')
    })
    
})