/// <reference types="Cypress"/>

var faker = require('faker-br');


describe('Fazendo cadastro de novo usuário', () => {
    beforeEach(()=>{
        cy.visit('/cadastre-se?redirect=%2F')
    })
    it('Acesso pagina de cadastro', ()=>{
       cy.visit('/cadastre-se?redirect=%2F')
       cy.get('.MuiGrid-root').should('be.visible')
       cy.get('form').should('exist')
    })
    it('Deve preencher todos os campos obrigatórios para efetuar cadastro', ()=>{
        cy.cadastro(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), "Umasenhasegura#123", "Umasenhasegura#123", faker.br.cpf(), "18-03-1998","11 918234458")
        cy.get('.natds701').should('be.visible')
        })
})