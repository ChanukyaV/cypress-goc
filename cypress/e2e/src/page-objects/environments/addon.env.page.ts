import { CasePage } from "../case.page";

export class AddonEnvPage extends CasePage {

    elements = {
        withdrawSelect: () => cy.get("select[name$='Category']"),
        reasonTextArea: () => cy.get("textarea[name$='Reason']")
    }

    withdrawProvisioning(reason: string, comments: string) {
        this.clickActions()
        this.clickMenuItem('Withdraw provisioning')
        this.elements.withdrawSelect().select(reason)
        this.elements.reasonTextArea().type(comments)
        this.click(this.commonElements.buttonXpath('Next', true))
        cy.wait(2000)
        return this
    }
    
}