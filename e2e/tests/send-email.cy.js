import { describe } from "mocha";
import { CommonPageActions } from "../pages/common-page/common-page.actions";
import { ContactActions } from "../pages/contact/contact.actions";
import { GetNewUser } from "../pages/createandloginuser/get-new-user.actions";

describe('Send success email', () => 
{
    it('Send email whit an registered user account', () => 
    {
        CommonPageActions.navigateToUrl();
        GetNewUser.signUpAndLoginUser();
        CommonPageActions.clickOnContactButton();
        ContactActions.completeEmail();
        ContactActions.completeName();
        ContactActions.completeMessage();
        ContactActions.clickSendMessageButton();
    })
})