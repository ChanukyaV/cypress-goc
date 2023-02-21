// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-wait-until';

Cypress.Commands.add('clickAndWait', (elmt) => {
   elmt.click()
   cy.waitForLoader()
   cy.waitForPegaUiMask()
})

Cypress.Commands.add('waitForLoader', () => {
    cy.get('body')
        .then($body => {
            if ($body.find('div.loader').length) {
                cy.waitUntil(function() {
                    return $body.find('div.loader').length === 0;
                })
            }
        })
})

Cypress.Commands.add('waitForPegaUiMask', () => {
    cy.get('body')
        .then($body => {
            if ($body.find('div#pega_ui_mask').length) {
                cy.waitUntil(function() {
                    return $body.find('div#pega_ui_mask').length === 0;
                })
            }
        })
})