import { CommonPageActions } from "../common-page/common-page.actions";
import { RandomStringFunction } from "../globalfunctions/random-string.function";
import { LogInActions } from "./logIn/log-in.actions";
import { SignUpActions } from "./signUp/sign-up.actions";

export class GetNewUser
{
    static signUpAndLoginUser()
    {
        const usernameGenerated = RandomStringFunction.generateRandomString();
        const password = RandomStringFunction.generateRandomString();
        CommonPageActions.clickOnSignUpOption();
        SignUpActions.insertUsername(usernameGenerated);
        SignUpActions.insertPassword(password);
        SignUpActions.clickOnSignUpModalButton();
        CommonPageActions.clickOnLogInButton();
        LogInActions.insertUsername(usernameGenerated);
        LogInActions.insertPassword(password);
        LogInActions.clickOnLogInModalButton();
        CommonPageActions.validateUsername(usernameGenerated);
    }
}