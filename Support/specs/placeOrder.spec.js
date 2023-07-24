import homePageElements from "../PageObject/homePage"
import shoppage from "../PageObject/shoppage"
import checkoutItem from "../PageObject/checkoutPage"


describe("Place Order End To End Scenario",()=> {
    beforeEach("navigate to landing page", async()=> {
       await  homePageElements.open()
       

    })
    it ("Add product in card and verified product is added or not", async ()=> {
        await shoppage.addProductInCart()
        await checkoutItem.checkoutProduct()

    })
})