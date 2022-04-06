describe('Main display', () => {
  
  it('should show the form and trick cards on page load', () => {
      cy.visit('http://localhost:3000/')
        .contains('Sick Trick Wish List')
        .get('form')
          .contains('Choose your Stance')
      cy.get('.trick-card').first()
        .contains('Regular Treflip')
  });

  it('should be able to fill out multiple inputs', () => {
    cy.visit('http://localhost:3000/')
      .get('.stance-input').select('Regular').contains('Regular')
      .get('.trick-name-input').type('My sweet new move').should('have.value', 'My sweet new move')
      .get('.obstacle-input').select('Rails').contains('Rails')
      .get('.tutorial-link-input').type('www.example.com').should('have.value', 'www.example.com')
});






});