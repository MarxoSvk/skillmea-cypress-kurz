it('retry', { defaultCommandTimeout: 10000 }, () => {

  // akcia (aj click, type, check...)
  cy.visit('/board/1')

  // queries
  cy.get('[data-cy=card]')
    .eq(2)
  // overovanie (neodporuca sa davat timeout na overovania)
    .should('contain.text', 'juice')

});
