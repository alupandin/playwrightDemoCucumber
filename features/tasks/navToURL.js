const {navURL} = require("../config")

class NavToURL {
    constructor(page) {
        this.page=page;
    }

    async navigateToGate() {
        await this.page.goto(navURL.URL, {
            waitUntil: "networkidle0",})
            .catch(()=>{});
    }
}

module.exports = {Navigate: NavToURL}