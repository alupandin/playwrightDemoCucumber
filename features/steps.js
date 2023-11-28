const{
    Given,
    When,
    Then,
    And,
    BeforeAll,
    AfterAll,
    setDefaultTimeout,
} = require("@cucumber/cucumber");
//const {chromium} = require("playwright");
const {browserType, launchConfig, navURL} = require("./config");
const {strictEqual} = require("assert");
const moment = require("moment");
const {expect} = require("playwright-expect");

const {LogIn} = require("./tasks/login")
const {Navigate} = require("./tasks/navToURL")
const {NavigateToPage} = require("./tasks/navToPage")
const {AddToCart} = require("./tasks/addProductToCart")
const {CompleteCheckout} = require("./tasks/completeCheckout")
const {homePageSelectors} = require("./ui/home");

let page;
let browser;
let context;

let loginPage;
let navigate;
let navigateToPage;
let addProductToCart;
let checkoutProcess;

setDefaultTimeout(50*1000);

BeforeAll(async () => {
    browser = await browserType.launch(launchConfig);
    context = await browser.newContext();
    page = await context.newPage();
    loginPage = new LogIn(page);
    navigate = new Navigate(page);
    navigateToPage = new NavigateToPage(page);
    addProductToCart = new AddToCart(page);
    checkoutProcess = new CompleteCheckout(page);

});

AfterAll(() => {
    if (!page.isClosed()) {
        browser.close();
    }
});

Given("User with credentials", async () => {
    //not recognizing params from config
    await navigate.navigateToGate();
    // await page.goto(navURL.base, {
    //         waitUntil: "networkidle0",}).catch(() => {
    //     });
});

When("they attempt to sign into app", async () => {
    await loginPage.loginApp()
    //await page.waitForTimeout(10000);
});

Then("login is successful", async () => {
    //not dynamic atm
    //await page.waitForSelector(homePageSelectors.headerUser)
});

Given("user navigate to store page", async () => {

});

Given("they select a product to cart", async(dataTable) => {
    var tableContent = dataTable.hashes();
    for (let i = 0; i < dataTable.hashes().length; i++){
        var productName = dataTable.hashes()[i].productName;
        await addProductToCart.addProductToCart(productName);
    }
});

When("they attempt to checkout", async(dataTable) => {
    await navigateToPage.goToShoppingCart();
    await page.locator('#checkout').click();
    var tableContent = dataTable.hashes();
    for (let i = 0; i < dataTable.hashes().length; i++){
        var firstName = dataTable.hashes()[i].firstName;
        var lastName = dataTable.hashes()[i].lastName;
        var zipPostal = dataTable.hashes()[i].zipPostal;
        await checkoutProcess.checkoutProcess(firstName,lastName,zipPostal);
    }
});

Then("they successfuly buy the desired product", async() => {
    await checkoutProcess.checkoutSuccess()
});