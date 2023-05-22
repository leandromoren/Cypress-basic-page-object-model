import { ProductElement } from "./product.elements";

export class ProductAction
{
    static clickOnAddToProductButton()
    {
        ProductElement.elements.addToCartButton.click()
    }
}