import {LoginPage} from "./pages/Login_page"

const loginPage = new LoginPage()


it('Demo', function() {
    
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    
}) 