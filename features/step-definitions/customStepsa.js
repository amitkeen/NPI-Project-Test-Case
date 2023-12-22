const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { expect } = require('chai');
const webdriver = require('selenium-webdriver');
const {By, until } = require('selenium-webdriver');
const { crd, adr } = require("../../config/credential");

let driver;

Before(function () {
    console.log('Inside Before');
    driver = new webdriver.Builder()
        .forBrowser(webdriver.Browser.CHROME)
        .build();
});

After(function () {
    console.log('Inside After');
    // Quit the WebDriver instance after the test
    driver.quit();
});

Given('I have the NPI Portal landing page',async function () {
    await driver.get('http://localhost:3001/');


    // await new Promise(resolve => setTimeout(resolve, 31000));

    // await driver.findElement(By.xpath("/html/body/div[4]/div[3]/div[2]/img")).click();

  });

  Then('I cut the banner with a cross button after running for {int} seconds',async function (int) {

    await driver.findElement(webdriver.By.xpath(adr.bannar)).click();

    });
