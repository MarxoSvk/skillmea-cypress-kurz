const { defineConfig } = require("cypress");
import { resetDb } from './cypress/tasks/resetDb'

module.exports = defineConfig({
  projectId: 'g1bw59',
  viewportHeight: 550,
  viewportWidth: 660,
  e2e: {
    setupNodeEvents(on: Cypress.PluginEvents, 
      config: Cypress.PluginConfigOptions) {

      // task
      on('task', { 
        reset: resetDb
      })

      // config
      config.baseUrl = 
      // zapis je stylom true/false statement (? a nasledne 1=true : 0=false )
      process.env.CI ? 'https://skillmea.sk' : 'http://localhost:3000'
      return config
    },
    // specPattern: '**/headless/*.cy.{js,ts}',
    excludeSpecPattern: '**/headless/*.cy.{js,ts}',
    baseUrl: 'http://localhost:3000',
    experimentalWebKitSupport: true,
    env: {
      requestMode: true
    }
  }
});
