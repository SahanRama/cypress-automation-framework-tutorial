class HomePage_PO{
    visitHomPage(){
        cy.visit('/')
    };
    navigateToContactUsPage(){
        cy.get('#contact-us').invoke('removeAttr','target').click()
    };

}
export default HomePage_PO;