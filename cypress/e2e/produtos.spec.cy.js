/// <reference types="cypress" />

context('funcionalidade de produtos', ()=>{

})

  beforeEach(() =>{
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
  });

  
    it('selecionar produto', () => {
    cy.get('[class="product-block grid"]').eq(5).click()
    
})
   
    it('adicionar no carinho', () => {
       
        var qtd = 10
    cy.get('[class="product-block grid"]').eq(5).click()
    cy.get('.button-variable-item-33').click()
    cy.get('.button-variable-item-Black').click()
    cy.get('.input-text').clear().type(qtd)
    cy.get('.single_add_to_cart_button').click()
    
    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', qtd)
  
  })
    