export class ContactElements
{
   static get elements()
   {
        return{
            get email()
            { 
                return cy.xpath("//input[@id='recipient-email']")
            },
            get name()
            { 
                return cy.xpath("//input[@id='recipient-name']")
            },
            get message()
            {
                return cy.xpath("//textarea[@id='message-text']")
            },
            get sendMsgButton()
            { 
                return cy.contains("button","Send message")
            }
        }
   }
}