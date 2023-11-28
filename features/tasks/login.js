const {loginPageSelectors} = require("../ui/login")

class LogIn {
    constructor(page) {
        this.page = page;
    }

    async loginApp(){
        if(await this.page.isVisible(loginPageSelectors.userName)){
            //await this.page.fill(loginPageSelectors.userName, process.env.USERPASS_CREDENTIALS_USR);
            //await this.page.fill(loginPageSelectors.passWord, process.env.USERPASS_CREDENTIALS_PSW);
            await this.page.fill(loginPageSelectors.userName, 'standard_user');
            await this.page.fill(loginPageSelectors.passWord, 'secret_sauce');
            await this.page.click(loginPageSelectors.btnLogin)
        }else{
            console.log('Already logged in...')
        }
    }
}

module.exports = {LogIn}