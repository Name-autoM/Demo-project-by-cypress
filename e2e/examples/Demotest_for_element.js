/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{

it('Test Case for Checkbox',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#checkBoxOption2').check().should('be.checked').and('have.value','option2')
cy.get('#checkBoxOption2').uncheck().should('not.be.checked')
cy.get('input[type="checkbox"]').check(['option1','option3'])
 

})

it('Test Case for Static and Dynamic Dropdown',function() {
//Static Dropdown
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('select').select('option2').should('have.value','option2')
 
//Dynamic dropdowns
cy.get('#autocomplete').type('Ja')
cy.get('.ui-menu-item div').each(($e1, index, $list) => {
 
    if($e1.text()==="Japan")
    {
        cy.wrap($e1).click()
    }
 
})
//autocomplete
cy.get('#autocomplete').should('have.value','Japan')


})
it('Test Case for click button hide and show',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//visible invisible
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')
 

})

it('Test Case for check radio button',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//radio buttons
cy.get('[value="radio2"]').check().should('be.checked')
 
 
  
})

})
