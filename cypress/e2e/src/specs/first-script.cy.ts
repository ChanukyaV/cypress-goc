import { GocLandingPage } from "../page-objects/goc-landing.page";
import {LoginPage} from "../page-objects/login.page"
const loginPage = new LoginPage();
let landingPage : GocLandingPage;

context('GOC First Test', () => {
    
    beforeEach(() => {         
      cy.visit('https://selfserviceportal-stg1.pegacloud.io/prweb/app/default/K-NugYSCAoiqjqQREbduWT1cZp2h0qYw*/!STANDARD')
      landingPage = loginPage.login()
    })
  
    it('Verify withdraw case for addon provisioning project', () => {     
      let projName = 'AddonProductAutomation'
      const projLandingPage = landingPage.openProjects()
      const projPage = projLandingPage.search(projName).openProject(projName)
      const prAddonId = projPage.clickActions().addNewEnv('Version set', '3.3.3-test', 'Int Testing')
      prAddonId.should('contain', 'PRADDON')
      const addonEnvPage = projPage.openPRAddonCase()
      addonEnvPage.withdrawProvisioning('Wrongly Scheduled', 'testing')
      addonEnvPage.getCaseStatus().should('contain', 'Resolved-Withdrawn')
    })

  })