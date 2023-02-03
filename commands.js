// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('cadastro', (primeiroNome, Sobrenome, Email, Senha, repetirSenha, CPF, dataDeNascimento, Celular) => {
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(primeiroNome);
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(Sobrenome);
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(Email);
        cy.get('#password-field').type(Senha);
        cy.get('#confirmPassword-field').type(repetirSenha);
        cy.get(':nth-child(8) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(CPF);
        cy.get(':nth-child(9) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(dataDeNascimento)
        cy.get(':nth-child(3) > .MuiButtonBase-root > .MuiIconButton-label > .natds59').click()
        cy.get(':nth-child(11) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(Celular);
        cy.get('#acceptedterms').click();
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('.natds93 > .MuiButtonBase-root').click()
});