export class BasePage {

    commonElements = {
        spanMenuItem: (title: string, contains: boolean = false) => contains ? 
            cy.xpath("//span[@class='menu-item-title' and contains(text(), '" + title +  "')]") : 
            cy.xpath("//span[@class='menu-item-title' and text()='" + title +  "']"),

        spanElmtXpath: (text: string, contains: boolean = false) => contains ? 
            cy.xpath("//span[contains(text(), '" + text +  "')]") : cy.xpath("//span[text()='" + text +  "']"),

        buttonXpath: (label: string, contains: boolean = false) => contains ? 
            cy.xpath("//button[contains(text(), '" + label +  "')]") : cy.xpath("//button[text()='" + label +  "']"),
    }

    click(element: Cypress.Chainable<JQuery<HTMLElement>>, force: boolean = false) {       
        let options = force ? {force: true} : {}
        element.click(options)
        cy.waitForLoader()
        cy.waitForPegaUiMask()
    }

    getText(element: Cypress.Chainable<JQuery<HTMLElement>>) : Cypress.Chainable<string> {      
        return element.then(($value) => {
            return $value.text()
        })      
    }
}