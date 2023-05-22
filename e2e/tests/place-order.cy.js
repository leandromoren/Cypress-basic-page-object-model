import { describe } from "mocha";
import { CommonPageActions } from "../pages/common-page/common-page.actions";
import { HomeActions } from "../pages/home/home.actions";
import { HomeConstants } from "../pages/home/home.constants";
import { ProductAction } from "../pages/product/product.actions";
import { CartAction } from "../pages/cart/cart.actions";
import { GetNewUser } from "../pages/createandloginuser/get-new-user.actions";

describe('Place order', () =>
{
    it('Place order with newly created user account', ()=>
    {
        const productName = HomeConstants.testData.productName;
        CommonPageActions.navigateToUrl();
        GetNewUser.signUpAndLoginUser();
        CommonPageActions.clickOnHomeButton();
        HomeActions.clickOnProductName(productName);
        ProductAction.clickOnAddToProductButton();
        CommonPageActions.clickOnCartButton();
        CartAction.clickOnPlaceOrderButton();
        CartAction.completePlaceOrderForm();
        CartAction.clickOnPurchaseButton();
        CartAction.verifyCartDataOrder();
        CartAction.clickOnOKButtonFromCartDataOrder();
    });
});