const {checkoutPageSelectors} = require("../ui/checkoutPage")

class CompleteCheckout{
    constructor(page) {
        this.page = page;
    }

    async checkoutProcess(firstName, lastName, zipPostal) {
        await this.page.fill(checkoutPageSelectors.inputFirstName, firstName);
        await this.page.fill(checkoutPageSelectors.inputLastName, lastName);
        await this.page.fill(checkoutPageSelectors.inputZipPostal, zipPostal);
        await this.page.click(checkoutPageSelectors.btnContinue);
        await this.page.click(checkoutPageSelectors.btnFinish);
    }

    async checkoutSuccess() {
        if(await this.page.locator("//h2[@class='complete-header' and text()='THANK YOU FOR YOUR ORDER']").isVisible()){
            console.log("<<<=== Successfuly purchased item ===>>>")
        }
    }
}

module.exports = {CompleteCheckout}