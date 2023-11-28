const {chromium, firefox, webkit, devices} = require("playwright");
const {configure, ArtifactArchiver} = require('@serenity-js/core');
const {SerenityBDDReporter} = require('@serenity-js/serenity-bdd');

//setDefaultTimeout(50 * 1000);

configure({
    crew: [
        new SerenityBDDReporter(),
        ArtifactArchiver.storingArtifactsAt('./target/site/serenity'),
    ]
});


var envChoice = process.env.ENVIRONMENT;
var URL;

switch (envChoice) {
    case 'base':
        URL = "https://www.saucedemo.com";
        break;
    case 'dev':
        URL = "https://www.saucedemo.com";
        break;
    case 'qa':
        URL = "https://www.saucedemo.com";
        break;
    case 'prod':
        URL = "https://www.saucedemo.com";
        break;
    default:
        URL = "https://www.saucedemo.com";
}

const navURL = {URL}


module.exports = {
    configure,
    navURL,
    timeout: 30000,
    browserType: chromium,
    launchConfig: {
        headless: false,
        slowMo: 300,
        screenshot: 'only-on-failure',
        video: 'on-first-retry'
    }
}