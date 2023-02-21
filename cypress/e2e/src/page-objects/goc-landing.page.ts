import { BasePage } from "./base.page"
import { ProjectsLandingPage } from "./projects/projects-landing.page"

export class GocLandingPage extends BasePage{
    
    elements = {
        projectsLink : () => cy.get("li[data-test-id='dynamic-nav-menu_7'] a")           
    }

    openProjects() : ProjectsLandingPage {
        this.click(this.elements.projectsLink())
        cy.wait(2000)
        return new ProjectsLandingPage()
    }
    
}