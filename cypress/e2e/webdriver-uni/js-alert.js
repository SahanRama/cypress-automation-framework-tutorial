/// <reference types = "Cypress"/>

describe('Handling js alerts',()=>{
    it('Confirm the js alert is contain correct text', ()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr','target').click()
        cy.get('#button1').click()

        cy.on('window:alert',($str)=>{
            expect($str).equal('I am an alert box!')
        })
    });
    it('Validaate the js alert ox working correctly when clicking ok button', ()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr','target').click()
        cy.get('#button4').click()

        cy.on('window:confirm',()=>{
            return true
        })
        cy.get('#confirm-alert-text').should('have.text','You pressed OK!')
    });

    it('Validaate the js alert ox working correctly when clicking cancel button', ()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr','target').click()
        cy.get('#button4').click()

        cy.on('window:confirm',()=>{
            return false;
        })
        cy.get('#confirm-alert-text').should('have.text','You pressed Cancel!')
    });

    it("Validate js confirm alert box using a stub", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        const stub = cy.stub()
        cy.on('window:confirm', stub)

        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            return true;
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
    });
})