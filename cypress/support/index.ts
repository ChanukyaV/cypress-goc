import 'cypress-wait-until';

declare global {
    namespace Cypress {
      interface Chainable {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
        waitForLoader(): Chainable<JQuery<HTMLElement>>

        waitForPegaUiMask(): Chainable<JQuery<HTMLElement>>
      }
    }
  }

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