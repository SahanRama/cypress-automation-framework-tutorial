/// <reference types = "Cypress"/>

describe('Test mouse actions', () => {
    it('Scroll element in to view', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()

    });
    it('Should be able to drag and drop a draggable item', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()

        cy.get('#draggable').trigger('mousedown', { which: 1 })
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })

    });
    it('Should be able to peform mouse double click', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        cy.get('#double-click').dblclick()

    });

    it.only('Should be able to peform left mouse button hold down on a given element', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        cy.get('#click-box').trigger('mousedown').then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
            expect($element.text()).to.include('Well done! keep holding that click now')
        })

    });
});