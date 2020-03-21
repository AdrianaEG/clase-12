/// <reference types= "Cypress" />

describe('Test de la tarea 11', () => {
    before(()=>{
        cy.visit(' http://192.168.1.102:8080/tarea-pendiente-clase-11/index.html');
    });

    it('tests', () => {
        cy.get('.cantidad-integrantes').type('2');
        cy.get('#btn-siguiente').click();
        cy.get('.edad-integrante').eq(0).type('25');
        cy.get('.edad-integrante').eq(1).type('20');
        cy.get('#btn-calcular').click();

        cy.get('#mayor').should('have.text', 'La edad mayor es: 25');
        cy.get('#menor').should('have.text', 'La edad menor es: 20');
        cy.get('#promedio').should('have.text', 'El promedio de edades es: 22.5');
    });
});

