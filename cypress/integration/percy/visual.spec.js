/// <reference types="cypress" />

context('Visual testing', () => {
    it('verifies post', () => {
        cy.visit("http://localhost:8080/markdown-test-file/");
        cy.get('.post-title').should('contain.text', 'Markdown test file');
        cy.percySnapshot();
    });
});