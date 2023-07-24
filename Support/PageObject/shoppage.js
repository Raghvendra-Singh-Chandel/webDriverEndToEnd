import navComponent from "../Component/navComponent"

class shoppage {
    get navComponents() {
        return navComponent
    }

    get productAddToCart() {
        return $(`li .add_to_cart_button`)
    }

    get cardCount() {
        return $(`a .count`)
    }

    get cartBtn() {
        return $(`a.cart-page-link`)
    }

    get productName() {
        return $(`h2.woocommerce-loop-product__title`)
    }


    /**
     * Methods for shop page
     */

    async addProductInCart() {
        await this.navComponents.shopNavTab.click()
        await expect(browser).toHaveUrlContaining('/shop')
        let product_count= await this.cardCount.getText()
        console.log(product_count)
        // const productName = (await this.productName).getText()
        await this.productAddToCart.click()
        await expect(this.cardCount).toHaveText("1")
        await this.cartBtn.waitForClickable()
        await this.cartBtn.click()
        await expect(browser).toHaveUrlContaining('/cart/')
        
        
        
        
        
       
        
    }




}
export default new shoppage