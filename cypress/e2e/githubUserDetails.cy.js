const octocatUsername = 'octocat';
const octocatName = 'The Octocat';
const octocatLogin = '@octocat';

describe('Github user details', () => {
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

    it('should display information about user after entering the username and clicking search button', () => {
        cy.fillSearchUsernameInput(octocatUsername);
        cy.clickSearchButton();
        cy.get('[data-cy="github-name"]').should('have.text', octocatName);
        cy.get('[data-cy="github-login"]').should('have.text', octocatLogin);
        cy.get('[data-cy="github-avatar"]').should('be.visible');
    })
  })
  