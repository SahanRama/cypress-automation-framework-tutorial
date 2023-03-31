/// <reference types = "Cypress" />

describe('Test upload file via webdriveruni', () => {
    it('Verify uploading a file', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#file-upload').invoke('removeAttr', 'target').click()
        
        cy.get('#myFile').selectFile('cypress/fixtures/sahan.jpeg')
        cy.get('#submit-button').click()
        cy.on('window:alert',($str)=>{
            expect($str).equal('Your file has now been uploaded!')
        })
        
    });
    it('Verify uploading no file', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#file-upload').invoke('removeAttr', 'target').click()

        cy.get('#submit-button').click()
        cy.on('window:alert',($str)=>{
            expect($str).equal('You need to select a file to upload!')
        })
    });
});