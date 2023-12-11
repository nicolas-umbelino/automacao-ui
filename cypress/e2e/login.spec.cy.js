// <reference types="cypress" />

context('funcionalidade de login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
    });

    
    it('login feito com sucesso', () =>{
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.breadcrumb > .active').should('contain' , 'Minha conta')
    });
    
 
    it('erro de usuário inválido', () =>{
        cy.get('#username').type('ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()
    });

    
    it.only('erro de senha inválida', () =>{
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain' , 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')

    });
    
});