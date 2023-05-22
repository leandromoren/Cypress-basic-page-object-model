import { CartFormFunctions } from "./place-order-form-functions/cart-form.functions";
import { CartElement } from "./cart.elements";

export class CartAction
{
    static clickOnPlaceOrderButton()
    {
        CartElement.elements.placeOrderButton.click();
    }
    
    static clickOnPurchaseButton()
    {
        CartElement.elements.purchaseButton.click();
    }

    static completePlaceOrderForm()
    {
        const names = ['Ana', 'Juan', 'María', 'Pedro', 'Luisa', 'Carlos', 'Laura', 'José', 'Marta', 'Andrés'];
        const name = names[Math.floor(Math.random() * names.length)];

        const countries = ['Afganistán', 'Argentina', 'Brasil', 'Canadá', 'China', 'Egipto', 'España', 'India', 'Japón', 'México', 'Rusia', 'Sudáfrica', 'Suiza'];
        const country = countries[Math.floor(Math.random() * countries.length)];
       
        const cities = ['Nueva York', 'París', 'Londres', 'Roma', 'Tokio', 'Sídney', 'Toronto', 'Moscú', 'Berlín', 'Ámsterdam', 'Dubái', 'Hong Kong', 'Buenos Aires'];
        const city = cities[Math.floor(Math.random() * cities.length)];
        
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        const month = months[Math.floor(Math.random() * months.length)];

        const cardGenerated = CartFormFunctions.generarNumeroTarjeta()
        const yearGenerated = CartFormFunctions.generarAnioAleatorio()

        CartElement.elements.nameForm.type(name);
        CartElement.elements.countryForm.type(country);
        CartElement.elements.cityForm.type(city);
        CartElement.elements.creditCardForm.type(cardGenerated);
        CartElement.elements.monthForm.type(month);
        CartElement.elements.yearForm.type(yearGenerated);
    }

    static verifyCartDataOrder()
    {
        CartElement.elements.successIcon.should('exist')
    }

    static clickOnOKButtonFromCartDataOrder()
    {
        CartElement.elements.okButtonOrderData.click()
    }
}