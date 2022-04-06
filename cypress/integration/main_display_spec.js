describe('Main display', () => {
  
  it('should show the form and trick cards on page load', () => {
      cy.visit('http://localhost:3000/')
        .contains('Sick Trick Wish List')
        .get('form')
          .contains('Choose your Stance')
      cy.get('.trick-card').first()
        .contains('Regular Treflip')
  });






});