describe('form test', ()=>{
    beforeEach(() => {
        cy.visit('/forms')
    })

    it('Test subscribe form', ()=>{
        cy.contains(/testing forms/i)
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('nehal@gmail.com')
        cy.contains(/Successfully subbed: nehal@gmail.com!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed: nehal@gmail.com!/i).should('exist')
        cy.wait(1000)
        cy.contains(/Successfully subbed: nehal@gmail.com!/i).should('not.exist')

        cy.get('@subscribe-input').type('nehal@gmail.pk')
        cy.contains(/invalid email: nehal@gmail.pk/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/invalid email: nehal@gmail.pk/i).should('exist')
        cy.wait(1500)
        cy.contains(/invalid email: nehal@gmail.pk/i).should('not.exist')

        cy.contains(/fail!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/fail!/i).should('exist')
    })
})