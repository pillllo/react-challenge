context('Dummy test', () => {
  it('should always pass', () => {
    cy.visit('/budget');

    cy.get('button').should('exist');
  });
});
