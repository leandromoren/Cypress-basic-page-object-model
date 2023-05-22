export class CartElement
{
    static get elements()
    {
        return{
            get placeOrderButton()
            {
                return cy.contains("button", "Place Order")
            },

            get nameForm()
            {
                return cy.xpath("//input[@id='name']")
            },

            get countryForm()
            {
                return cy.xpath("//input[@id='country']")
            },

            get cityForm()
            {
                return cy.xpath("//input[@id='city']")
            },

            get creditCardForm()
            {
                return cy.xpath("//input[@id='card']")
            },

            get monthForm()
            {
                return cy.xpath("//input[@id='month']")
            },

            get yearForm()
            {
                return cy.xpath("//input[@id='year']")
            },

            get purchaseButton()
            {
                return cy.contains("button", "Purchase")
            },

            get completeOrderData()
            {
                return cy.xpath("//h2[contains(text(),'Thank you for your purchase!')]")
            },

            get okButtonOrderData()
            {
                return cy.contains("button", 'OK')
            },

            get successIcon()
            {
                return cy.xpath("//body/div[10]/div[4]")
            }
        }
    }
}