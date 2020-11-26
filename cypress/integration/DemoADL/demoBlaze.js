describe('HU: Consumo de Apis segun categoría', function(){    

    it('Nombre Escenario1', function(){
      cy.server()
      //cy.route('POST', '**/view').as('view')


      cy.visit('https://www.demoblaze.com/')

      cy.get('.card-title').first().click()
      cy.get('.col-sm-12 > .btn').click()
      //cy.get('.name').should('be.visible').and('have.text','Samsung galaxy s6')
     cy.getMocksView(200)     
      cy.get('#cartur').click()
     // cy.get('.success > :nth-child(2)').should('be.visible').and('have.text','Samsung galaxy chapter ADL')
      //cy.wait('@view').its('responseBody').should('have.property', 'id', 1)

    })

})
