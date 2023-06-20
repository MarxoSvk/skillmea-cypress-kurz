it('overovanie', () => {

  cy.visit('/board/1')

  cy.get('[data-cy="card"]')
    .should('have.length', 3)

  cy.get('[data-cy="card-checkbox"]')
    .eq(2)
    .check()

  cy.get('[data-cy="card-checkbox"]')
    .eq(2)
    .should('be.checked')

  cy.get('[data-cy="card-checkbox"]')
    .eq(1)
    .uncheck()

  cy.get('[data-cy="due-date"]')
  .should('have.class', 'completed')

  // overovanie hodnoty v input elemente sa robi cez have.value
  cy.get('[data-cy="list-name"]')
    .should('have.value', "new list")
})