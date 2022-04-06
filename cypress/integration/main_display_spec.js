describe('Main display form flow', () => {
  
  it('should show the form on page load', () => {
      cy.visit('http://localhost:3000/')
        .contains('Sick Trick Wish List')
        .get('form').contains('Choose your Stance')
        .get('form').contains('Choose your Obstacle')
        .get('form').contains('Send It!')
  });

  it('should show trick cards on page load', () => {
    cy.visit('http://localhost:3000/')
      .get('.trick-card').first().contains('Regular Treflip')
      .get('.trick-card').last().contains('Regular Frontside 50-50, backside 180 out')
});

  it('should be able to fill out multiple inputs', () => {
    cy.visit('http://localhost:3000/')
      .get('.stance-input').select('Regular').contains('Regular')
      .get('.trick-name-input').type('My sweet new move').should('have.value', 'My sweet new move')
      .get('.obstacle-input').select('Rails').contains('Rails')
      .get('.tutorial-link-input').type('www.example.com').should('have.value', 'www.example.com')
});

  it('should be able to submit form and see new trick on page', () => {
    cy.visit('http://localhost:3000/')
      .get('.stance-input').select('Regular')
      .get('.trick-name-input').type('My sweet new move')
      .get('.obstacle-input').select('Rails')
      .get('.tutorial-link-input').type('www.example.com')
      .get('.submit-btn').click()
    cy.get('.trick-card').last().contains('Regular My sweet new move')
  });

});