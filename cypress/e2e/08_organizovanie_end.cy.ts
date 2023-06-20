beforeEach(() => {

  cy.visit('/board/1')

})

describe('group #1', () => {

  beforeEach(() => {
    cy.log(Cypress.currentTest.title)
  });

  it('otvorenie aplikácie', () => {

  });

  it('overenie loga', () => {

    cy.get('[data-cy=trello-logo]')
      .should('be.visible')

  })

});

describe('group #2', () => {

  it('otvorenie boardu', () => {

  })

});

// odporucanie od veduceho kurzu je pouzivat cistenie test dat
// radsej v beforeEach hookoch, nie after kvoli debugu

