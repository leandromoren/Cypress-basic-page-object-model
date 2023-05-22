import { LogInElements } from "./log-in.elements"

export class LogInActions
{
    static insertUsername(username)
    {
        LogInElements.elements.username.click()
        LogInElements.elements.username.invoke('val',username)
    }

    static insertPassword(password)
    {
        LogInElements.elements.password.click()
        LogInElements.elements.password.invoke('val',password)
    }

    static clickOnLogInModalButton()
    {
        LogInElements.elements.logInModalButton.click()
    }
}