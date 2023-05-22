export class CommonPageElements
{
    static get topMenu()
    {
        return{ 
            get signUp()
            {
                return cy.xpath("//a[@id='signin2']")
            },

            get logIn()
            {
                return cy.xpath("//a[@id='login2']")
            },

            get cart()
            {
                return cy.xpath("//a[@id='cartur']")
            },

            get aboutUs()
            {
                return cy.xpath("//a[contains(text(),'About us')]")
            },

            get contact()
            {
                return cy.xpath("//a[contains(text(),'Contact')]")
            },

            get home()
            {
                return cy.xpath("//body/nav[@id='narvbarx']/div[@id='navbarExample']/ul[1]/li[1]/a[1]")
            },

            get welcomeUser()
            {
                return cy.xpath("//a[@id='nameofuser']")
            }
        }
    }
}