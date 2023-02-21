import { CasePage } from "../case.page"
import { AddonEnvPage } from "../environments/addon.env.page"

export class ProjectPage extends CasePage{

    elements = {
        iUnderstandChkBox : () => cy.get("input[data-test-id='202203141002250760975']"),
        nextButton : () => cy.xpath("//button[contains(text(), 'Next')]"),
        versionSrcType: () => cy.xpath("//input[contains(@name, 'cloudversionsource')]/following-sibling::button"),
        versionType: () => cy.xpath("//input[contains(@name, 'CloudVersionSetVersion')]/following-sibling::button"),
        envType: () => cy.get("div[data-test-id='20211025125740028425'] i"),
        envOption: (option: string) => cy.xpath("//div[@id='msresults-list']//span[text()='" + option +  "']"),
        addonCaseId: () => cy.get("div[node_name='CaseCreateAcknowledgement'] a")
    }

    /**
     * 
     * @param versionSrcType provide the version source
     * @param version provide the version if you choose Version set otherwise pass null 
     * @param environment provide the environment
     * @returns PRADDON Case Id
     */
    addNewEnv(versionSrcType: string, version: string, environment: string) : Cypress.Chainable<string>{        
        this.hoverMenuItem('Add-on provisioning')
        this.clickMenuItem('Add new environment')
        this.elements.iUnderstandChkBox().click()
        this.elements.nextButton().click()
        this.click(this.elements.versionSrcType())
        this.click(this.commonElements.spanElmtXpath(versionSrcType))
        cy.wait(2000)
    
        if (versionSrcType === 'Version set') {     
            this.elements.versionType().click()        
            this.commonElements.spanElmtXpath(version).click()         
            this.elements.envType().click()
            this.elements.envOption(environment).click()
            this.commonElements.buttonXpath('Next', true).click()
            this.click(this.commonElements.buttonXpath('Create', true))
        }     
        return this.getText(this.elements.addonCaseId())
    }

    openPRAddonCase() : AddonEnvPage{
        this.click(this.elements.addonCaseId())
        return new AddonEnvPage()
    }
    
}