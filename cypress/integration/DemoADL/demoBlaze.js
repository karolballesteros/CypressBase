describe('HU: Consumo de Apis segun categoría', function(){    

    it('Nombre Escenario1', function(){
        cy.server()
        cy.route('POST', '**/view').as('postCart')

        cy.getMocksError(200)
        cy.visit('https://www.demoblaze.com/')
        cy.contains('Laptops').click()
      //  cy.getMocksView(200)
        cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click()
        cy.get('.price-container').should('contain', '790')

        cy.get('.col-sm-12 > .btn').click()
        //cy.getMocksView(200)
        cy.get('#cartur').click()
        cy.wait('@postCart').its('responseBody').should('have.property', 'title', 'Sony vaio i10')
    })

})
