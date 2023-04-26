const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotOnRunFailure: true,
  pageLoadTimeout: 50000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/report',
    reportPageTitle: "Search Engine Test Automation Report",
    overwrite: true,
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    testIsolation: false,
    experimentalOriginDependencies: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    chromeWebSecurity: false
  },
});
