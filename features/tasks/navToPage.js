const {navBarSelectors} = require("../ui/navBarSelectors")
const {storePageSelectors} = require("../ui/storePage")

class NavigateToPage {
    constructor(page) {
        this.page=page;
    }
    async goToShoppingCart(){
        await this.page.click(storePageSelectors.linkShoppingCart)
    }
}

module.exports = {NavigateToPage}