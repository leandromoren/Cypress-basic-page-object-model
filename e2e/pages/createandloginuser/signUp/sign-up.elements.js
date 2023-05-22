export class SignUpElements
{
    static get elements()
    {
        return{
            get username()
            {
                return cy.xpath("//input[@id='sign-username']")
            },
            get password()
            {
                return cy.xpath("//input[@id='sign-password']")
            },
            get signUpModalButton()
            {
                return cy.contains("button", 'Sign up')
            },

            get closeSignUpModalButton()
            {
                return cy.xpath("//body/div[@id='signInModal']/div[1]/div[1]/div[3]/button[1]")
            },

            get alert()
            {
                cy.on('window:alert', () => {
                    cy.on('window:confirm', () => true);
                });
            },
        }
    }
}