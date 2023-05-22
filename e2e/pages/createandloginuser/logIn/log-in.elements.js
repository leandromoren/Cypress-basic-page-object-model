export class LogInElements
{
    static get elements()
    {
        return{
            get username()
            {
                return cy.xpath("//input[@id='loginusername']")
            },
            get password()
            {
                return cy.xpath("//input[@id='loginpassword']")
            },
            get logInModalButton()
            {
                return cy.contains("button","Log in")
            },
        }
    }
}

////button[contains(text(),'Log in')]