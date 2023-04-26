// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Handle uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
    console.log("error", err);
    console.log("runnable", runnable);
    console.log("message", err.message);
    return false;
});

// register Mocha reporter
import 'cypress-mochawesome-reporter/register';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Exception Handler
cy.on("fail", (err, runnable) => {
    console.log("error", err);
    console.log("runnable", runnable);
    console.log("message", err.message);
    if (err.name === "AssertionError" && !err.message.includes("Timed out retrying after 4000ms:")) 
    {throw err;}
});

