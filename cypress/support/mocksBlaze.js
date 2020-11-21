Cypress.Commands.add("getMocksError", (opt)=>{
    if(opt=='200'){
        cy.route('POST','**/bycat', 'fixture:byCat.json')        
    }else if(opt=='500'){
        cy.route('POST','**/bycat', 'fixture:byCatError.json')        
    }
})

Cypress.Commands.add("getMocksView", (opt)=>{
        if(opt==200){
            cy.route('POST','**/view', 'fixture:view.json')        
        
        }else if(opt==500){
            cy.route({
                method:'POST',
                url:'**/view',
                status:500,
                response: 'fixture:viewError.json'
            })
        }


})

Cypress.Commands.add("getMocksPayment", (opt)=>{
    cy.route('POST','**/addtocart', 'fixture:payment.json')        
})