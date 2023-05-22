import { CommonPageConstants } from "./common-page.constants";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageActions
{
    static navigateToUrl()
    {
        cy.visit(CommonPageConstants.applicationUrl)
    }

    static clickOnSignUpOption()
    {
        CommonPageElements.topMenu.signUp.click();
    }

    static clickOnLogInButton()
    {
        CommonPageElements.topMenu.logIn.click();
    }

    static  clickOnCartButton()
    {
        CommonPageElements.topMenu.cart.click();
    }

    static  clickOnAboutUsButton()
    {
        CommonPageElements.topMenu.aboutUs.click();
    }

    static  clickOnContactButton()
    {
        CommonPageElements.topMenu.contact.click();
    }

    static  clickOnHomeButton()
    {
        CommonPageElements.topMenu.home.click();
        CommonPageElements.topMenu.home.wait(2000)
    }

    static validateUsername(username)
    {
        CommonPageElements.topMenu.welcomeUser.should('contain',`Welcome ${username}`)
    }
}