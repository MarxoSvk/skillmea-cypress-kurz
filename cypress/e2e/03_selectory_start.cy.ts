it('shapes - class, id, attr', { baseUrl: null }, () => {

  cy.visit('./mini-apps/shapes.html')

  // '.' sa pouziva na urcenie class
  cy.get('.square')
  // '#' sa pouziva na urcenie id
  cy.get('#circle')
  // '[]' sa pouziva na urcenie vlastnych atributov
  cy.get('[data-cy=triangle]')

  cy.get('div')
  cy.get('h1')

  cy.contains('Shapes')
  cy.contains('h1','Shapes')
})


it('rainbow - class, id, attr', { baseUrl: null }, () => {

  cy.visit('./mini-apps/rainbow.html')

  cy.get('li').first()
  cy.get('li').eq(2)
  cy.get('ul').find('.green')

})