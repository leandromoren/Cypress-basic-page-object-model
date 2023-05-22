import { SignUpElements } from "./sign-up.elements"

export class SignUpActions
{
    static insertUsername(username)
    {
        SignUpElements.elements.username.click()
        SignUpElements.elements.username.invoke('val',username)
    }

    static insertPassword(password)
    {
        SignUpElements.elements.password.click()
        SignUpElements.elements.password.invoke('val',password)
    }

    static clickOnSignUpModalButton()
    {
        SignUpElements.elements.signUpModalButton.click()
    }

    static clickCloseSignUpModalButton()
    {
        SignUpElements.elements.closeSignUpModalButton.click()
    }

    static acceptAlertWindow()
    {
        SignUpElements.elements.alert
    }
}