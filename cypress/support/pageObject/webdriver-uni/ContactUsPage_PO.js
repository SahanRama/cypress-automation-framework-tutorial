class ContactUsPage_PO{
    webdriverUni_ContactForm_Submission (firstName, lastName, email, comment,$selector, expectedText) {
        cy.get('[name="first_name"]').type(firstName);
        cy.get('[name="last_name"]').type(lastName);
        cy.get('[name="email"]').type(email);
        cy.get('[name="message"]').type(comment);
        cy.get('[type="submit"]').click();
        cy.get($selector).contains(expectedText);
    };
}
export default ContactUsPage_PO