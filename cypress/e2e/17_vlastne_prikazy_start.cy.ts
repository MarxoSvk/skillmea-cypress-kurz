// Cypress.Commands.add('dataCy', (selector) => {

//   Cypress.log({
//     displayName: 'dataCy',
//     message: selector,
//     consoleProps(){
//       return{
//         selector
//       }
//     }
//   })

//   cy.get(`[data-cy="${selector}"]`,{log:false})

// })

beforeEach(() => {

  cy.request('POST', '/api/reset')
  cy.request('POST', '/api/boards', { name: 'nákup' })
    .its('body.id')
    .as('boardId')

})

it('vlastne prikazy', function () {

  cy.visit(`/board/${this.boardId}`)

  cy.dataCy('add-list-input')
    .type('Potraviny{enter}')

  cy.dataCy('new-card')
    .click()

  cy.dataCy('new-card-input')
    .type('mlieko{enter}')

});