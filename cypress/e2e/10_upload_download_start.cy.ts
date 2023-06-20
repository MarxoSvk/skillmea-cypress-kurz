it('upload a download', () => {

  cy.visit('/board/1?card=1')

  // cy.get('[data-cy="upload-image"]')
  // .selectFile('cypress/fixtures/skillmea_logo.svg', 
  // {action:'drag-drop'})

  // cy.get('[type=file]')
  // .invoke('show')
  // .selectFile('cypress/fixtures/skillmea_logo.svg')

  cy.contains('Download')
  .click()

  // readFile je dobry sposob ako overit, ze k stiahnutiu naozaj doslo
  cy.readFile('cypress/downloads/1_skillmea_logo.svg')
})