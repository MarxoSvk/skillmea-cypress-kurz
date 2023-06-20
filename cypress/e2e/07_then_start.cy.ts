it('text prvej karty', () => {

  cy.visit('/board/1')

  cy.get('[data-cy="card-text"]')
    .eq(0)
    .should('have.text', 'milk')

  cy.get('[data-cy="card-text"]')
    .eq(0)
    .then((card) => {
      console.log(card)
    })

  cy.get('[data-cy="card-text"]')
    .eq(0)
    .then((card) => {
      expect(card).to.have.text('milk')
    })

});

it('text všetkých kariet', () => {

  cy.visit('/board/1')

  cy.get('[data-cy="card-text"]')
    .eq(0)
    .should('have.text', 'milk')

  cy.get('[data-cy="card-text"]')
    .eq(1)
    .should('have.text', 'bread')

  cy.get('[data-cy="card-text"]')
    .eq(2)
    .should('have.text', 'juice')

  cy.get('[data-cy="card-text"]')
    .then((cards) => {
    expect(cards[0]).to.have.text('milk')
    expect(cards[1]).to.have.text('bread')
    expect(cards[2]).to.have.text('juice')
    })

  cy.get('[data-cy="card-text"]')
    .should((cards) => {
    expect(cards[0]).to.have.text('milk')
    expect(cards[1]).to.have.text('juice')
    expect(cards[2]).to.have.text('bread')
    })

});