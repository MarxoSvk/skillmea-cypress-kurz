beforeEach(()=>{

  cy.visit('/login')

  cy.get('[data-cy="login-email"]')
  .type('filip@example.com')

  cy.get('[data-cy="login-password"]')
  .type('nbusr123{enter}')
  
})

it('prihlasenie', () => {

  cy.get('[data-cy=board-item]')
  .should('have.length',2)

});