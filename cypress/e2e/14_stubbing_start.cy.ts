it('načítanie zoznamu boardov', () => {

  cy.intercept({
    method: 'GET',
    url: '/api/boards'
  }, {
    fixture: 'mockData.json'
  })
    .as('boardList')

  cy.visit('/');

})

it('chybová hláška pri vytvorení boardu', () => {

  cy.intercept({
    method: 'POST',
    url: '/api/boards'
  },{
    statusCode: 403
  })
    .as('boardCreate')

  cy.visit('/');

  cy.get('[data-cy=create-board]')
    .click()

  cy.get('[data-cy=new-board-input]')
    .type('garden project{enter}')

  cy.get('[data-cy="notification-message"]')
  .should('contain.text', 'There was an error creating board')

})

it('pomalé načítavanie', () => {

  // odchytime si request pri dlhom nacitavani (dlhe nacitavanie je umelo vytvorene na 10sec)
  // chceme overit, ci button na reload pri dlhom nacitavani funguje, ak sa zobrazi, kliknem nan
  // sucasne uz druhykrat nechcem pomale nacitavanie a teda cez times:1 nastavim aby sa request zachytaval iba raz
  cy.intercept({
    method: 'GET',
    url: '/api/boards',
    times: 1
  }, (req) => {
    req.reply((res)=>{
      res.delay = 10000
    })
  })
    .as('boards')

  cy.visit('/')

  cy.contains('Reload')
  .click()

  cy.get('[data-cy=board-item]')
  .should('be.visible')
});