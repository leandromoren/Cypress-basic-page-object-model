export class HomeElements
{
    static get elements()
    {
        return{
            productLink(productName)
            {
                return cy.contains('a', productName)
            }
        }
    }
}