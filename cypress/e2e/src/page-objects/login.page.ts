import { BasePage } from "./base.page"
import { GocLandingPage } from "./goc-landing.page"

export class LoginPage extends BasePage{
    
    elements = {
        userNameInput : () => cy.get('#txtUserID'),    
        passwordInput : () => cy.get('#txtPassword'),       
        loginBtn : () => cy.get(".loginButton").contains('Log in')           
    }

    login() : GocLandingPage {
        this.elements.userNameInput().type('level3illuminatik@pegacloud.com')      
        this.elements.passwordInput().type('rules')      
        this.click(this.elements.loginBtn())
        return new GocLandingPage()
    }

}