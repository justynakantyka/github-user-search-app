Cypress.Commands.add('clickSearchButton', () => {
    cy.get('[data-cy="search-button"]').click();
})

Cypress.Commands.add('fillSearchUsernameInput', (username) => {
    cy.get('[data-cy="search-input"]').type(username);
})