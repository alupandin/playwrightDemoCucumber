const {storePageSelectors} = require("../ui/storePage")

class AddToCart{
    constructor(page) {
        this.page = page;
    }

    async addProductToCart(productName){
        switch(productName){
            case 'Backpack':
                await this.page.click(storePageSelectors.addToCartBackpack);
                break;
            case 'BoltShirt':
                await this.page.click(storePageSelectors.addToCartBoltShirt);
                break;
            default:
                console.log('Desired product not found')
        }
    }
}

module.exports = {AddToCart}

