import { BasePage } from "./base.page"

export class CasePage extends BasePage{

    caseElements = {
        actionsMenu: () => cy.xpath("(//button[@title='Actions'])[last()]"),
        caseStatus: () => cy.xpath("//label[text()='Status']/following-sibling::div//span")
    }

    clickActions() {
        this.caseElements.actionsMenu().click()
        return this
    }

    clickMenuItem(label: string) {    
        this.click(this.commonElements.spanMenuItem(label), true)
        return this
    }

    hoverMenuItem(label: string) { 
        this.commonElements.spanMenuItem(label).trigger('mouseover')
        return this
    }

    getCaseStatus(): Cypress.Chainable<String> {
        return this.getText(this.caseElements.caseStatus())
    }
}