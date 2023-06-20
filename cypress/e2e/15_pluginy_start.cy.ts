it('pluginy', () => {

  cy.request('POST', '/api/boards', {
    name: "Hello world"
  })

  cy.request('POST', '/api/boards', {
    name: "Hello world"
  })

  cy.api('PATCH', '/api/boards/1', {
    starred:true
  })

  cy.api('DELETE', '/api/boards/1')

});