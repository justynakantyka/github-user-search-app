describe('Github user details empty view', () => {
    beforeEach (() =>{
        cy.visit('localhost:3000');
    });

    it('should hide github user details by default', () => {
        cy.get('[data-cy="main-section"]').should('not.exist');
    })

    it('should not display github user details after submitting empty input', () => {
        cy.clickSearchButton();
        cy.get('[data-cy="main-section"]').should('not.exist');
    })
  })
  