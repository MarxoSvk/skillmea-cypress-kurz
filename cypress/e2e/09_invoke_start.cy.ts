it('invoke', () => {

  cy.visit('/board/2')

  cy.get('[data-cy="new-card"]')
  .invoke('text')
  .invoke('trim')
  .should('eq','Add another card')

  cy.get('[data-cy="footer-link"]')
  .invoke('prop','href')
  .should('eq','https://filiphric.com/')

  cy.get('.bg-blue6')
  .invoke('addClass', 'bg-gray-800')
  .invoke('removeClass', 'bg-blue6')

  // invoke nam odstranil atribut target (ktory spustal blank, cize novy tab)
  // tymto sposobom sa otvori link v rovnakom tabe
  cy.get('[data-cy="footer-link"]')
    .invoke('removeAttr', 'target')
    .click()
});