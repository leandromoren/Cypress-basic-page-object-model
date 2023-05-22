import { HomeElements } from "./home.elements";

export class HomeActions
{
    static clickOnProductName(productName)
    {
        HomeElements.elements.productLink(productName).click()
    }
}