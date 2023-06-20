// tymto pokynom si vzdy zresetujeme APP aby sme mali cisty stit
beforeEach(()=> {
  cy.request('POST', '/api/reset')
})

it('requesty', () => {

  // vytvorime novy board cez API, nie cez klikanie na stranke
  cy.request('POST', '/api/boards',{name:'board vytvoreny cez API'})
  .then( board => {
    expect(board.status).to.eq(201)
  })

  cy.request({
    method: 'GET',
    url: '/api/boards',
    headers: {
      accept: 'application/json'
    }
  }).its('body')
    .should('have.length', 1)

  cy.visit('/')

});