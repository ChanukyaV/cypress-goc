import { BasePage } from "../base.page"
import { ProjectPage } from "./project.page"

export class ProjectsLandingPage extends BasePage{

    elements = {
        searchInput : () => cy.get('div[node_name=ActiveProjectsList] input[title=Search]')          
    }

    search(name: string) {
        this.elements.searchInput().type(name)
        this.elements.searchInput().type('{enter}')
        return this
    }

    openProject(projectName: string) : ProjectPage {
        this.click(cy.get("td[data-attribute-name='Project Name']").contains(projectName))
        return new ProjectPage()      
    }
    
}