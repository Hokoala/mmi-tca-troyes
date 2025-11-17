describe('Test de la page welcome', () => {
    it('devrait afficher le titre correct', () => {
        cy.visit('http://localhost:8080/welcome');
        cy.get('h1').should('contain', 'Bienvenue');
    });
});