before(()=> {

  // arrange
  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .invoke('text')
    .as('boardName')

})

it('premenné1', function() {

  // act
  cy.get('[data-cy=board-item]')
    .click()

  // assert
  cy.get('[data-cy="board-title"]')
    .should('have.value', this.boardName)

  })

  it('premenné2', () => {

    cy.visit('/')
  
    cy.get('[data-cy=board-item]')
      .invoke('text')
      .as('boardName', {type:'static'})
    
    cy.get('[data-cy=board-item]')
      .click()
    
    cy.get('@boardName')
      .then(text => {
        
        cy.get('[data-cy=board-title]')
          .should("have.value", text)
      })
  
  })