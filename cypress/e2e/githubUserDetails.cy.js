const octocatUsername = 'octocat';
const octocatName = 'The Octocat';
const octocatLogin = '@octocat';

describe('Github user details', () => {
    beforeEach (() =>{
        cy.visit('localhost:3000');
        cy.fillSearchUsernameInput(octocatUsername);
        cy.clickSearchButton();
    });

    it('should display gitub user name after entering the username and clicking search button', () => {
        cy.get('[data-cy="github-name"]').should('have.text', octocatName);
    })

    it('should display gitub login after entering the username and clicking search button', () => {
        cy.get('[data-cy="github-login"]').should('have.text', octocatLogin);
    })

    it('should display gitub avatar after entering the username and clicking search button', () => {
        cy.get('[data-cy="github-avatar"]').should('be.visible');
    })
  })
  