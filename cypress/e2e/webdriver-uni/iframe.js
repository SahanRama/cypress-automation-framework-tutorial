///  <reference types ="Cypress"/>

describe('Handleing the iframes and modals', () => {
    it('Handle webdriveruni iframe and modal', () =>{
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#iframe').invoke('removeAttr', 'target').click()
        cy.get('#frame').then($iframe =>{
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })
        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find('#myModal').as('modal')
        
        cy.get('@modal').then($expectedText =>{
            const text = $expectedText.text()
            cy.log(text)
            expect(text).include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods')
        })
        cy.get('@modal').contains('Close').click()
        cy.get('@modal').should('not.be.visible')

    })
})