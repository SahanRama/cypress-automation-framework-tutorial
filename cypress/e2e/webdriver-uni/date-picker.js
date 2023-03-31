///  <reference types ="Cypress"/>

describe('Test date picker via webdriver uni', () => {
    it('Select date from the datepickers', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#datepicker').invoke('removeAttr', 'target').click()
        cy.get('#datepicker').click()
       
        // let date = new Date()
        // date.setDate(date.getDate()) // get current day 
        // cy.log(date.getDate())

        // let date2 = new Date()
        // date2.setDate(date.getDate() + 5) // get current day +5 days
        // cy.log(date2.getDate())

        let date = new Date()
        date.setDate(date.getDate() + 360)

        let futureYear = date.getFullYear()
        let futureMonth = date.toLocaleString('default', { month: 'long' })
        let futureDate = date.getDate()

        cy.log(futureDate + " ", futureMonth + " ", futureYear)

        function selectMonthAndYear() {
            cy.get('.datepicker-switch').first().then(currentDate => {
                if (!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click()
                    selectMonthAndYear()
                }
            }).then(() =>{
                cy.get('.datepicker-switch').first().then(currentDate => {
                    if (!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click()
                        selectMonthAndYear()
                    }
                })
            })
        }
        function selectDate() {
            cy.get('[class="day"]').contains(futureDate).click()
        }

        selectMonthAndYear()
        selectDate()

    })
})