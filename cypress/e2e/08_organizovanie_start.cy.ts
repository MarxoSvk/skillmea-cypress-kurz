beforeEach(()=>{
  cy.log(Cypress.currentTest.title)
  cy.visit('/')
})

it('otvorenie aplikácie', () => {


});

it('overenie loga', () => {

  cy.get('[data-cy=trello-logo]')
  .should('be.visible')

});