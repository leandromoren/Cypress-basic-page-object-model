import { EmailGenerator } from "./contact-functions/email-generator.function";
import { MsgGenerator } from "./contact-functions/msg-generator.function";
import { NameGenerator } from "./contact-functions/name-generator.function";
import { ContactElements } from "./contact.elements";

export class ContactActions
{
    static completeMessage()
    {
        ContactElements.elements.message.click()
        ContactElements.elements.message.invoke('val', MsgGenerator.msgGenerator())
    }

    static completeEmail()
    {
        ContactElements.elements.email.click()
        ContactElements.elements.email.invoke('val', EmailGenerator.emailGenerator())
    }

    static completeEmail()
    {
        ContactElements.elements.email.click()
        ContactElements.elements.email.invoke('val', EmailGenerator.emailGenerator())
    }

    static completeName()
    {
        ContactElements.elements.name.click()
        ContactElements.elements.name.invoke('val', NameGenerator.nameGenerator())
    }

    static clickSendMessageButton()
    {
        ContactElements.elements.sendMsgButton.click()
    }
}