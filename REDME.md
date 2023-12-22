const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { expect } = require('chai')
const webdriver = require('selenium-webdriver');

const  { crd } = require ("../../config/credential.json")

let driver = new webdriver.Builder()
    .forBrowser(webdriver.Browser.CHROME)

    .build();

Before(function () {
    console.log('Inside Before');

//    // Set up Firefox options
//    const options = new firefox.Options();
//    options.setBinary('/usr/bin/firefox'); // Update this line with your path
//
//    // Build the WebDriver instance with options
//    driver = new Builder()
//        .forBrowser('firefox')
//        .setFirefoxOptions(options)
//        .build();
});


After(function () {
    console.log('Inside After');
    // Quit the WebDriver instance after the test
    driver.wait();
});

When('I add {int} and {int}', function (num1, num2) {
    sum = num1 + num2;
});

Then('the result should be {int}', function (result) {
    expect(sum).equal(result);
});


 Given('I have the Redmine login page',async function () {
           await driver.get('http://localhost:3100/')
           await new Promise(resolve => setTimeout(resolve, 2000));

         });

 When('I open the login page and click on the login button', async function () {
            await driver.findElement(webdriver.By.className("login")).click();
            await new Promise(resolve => setTimeout(resolve, 2000))
         });

When('I enter my user id and password on the login page', async function () {


        await driver.findElement(webdriver.By.id("username")).sendKeys("amit");
        // await driver.findElement(webdriver.By.id("password")).sendKeys(crd.password);

        // await new Promise(resolve => setTimeout (resolve, 2000));
        // await driver.findElement(webdriver.By.id('username')).sendKeys("admin");
        // await driver.findElement(webdriver.By.id('password')).sendKeys("redhat@123");

        //     await new Promise(resolve => setTimeout (resolve, 2000));
         });




 When('I click on the login button', async function () {

        // await driver.findElement(webdriver.By.id("login-submit")).click();

         });


         When('I enter my correct user id and password on the login page', function () {
           
          });

     
 

 Then('I should be logged into Redmine',async function () {
            // await driver.get(crd.home)
         });
         
         
//
//Then('I should see the results', async function () {
//    // You can add assertions to check if the search results are displayed
//    // For example: const results = await driver.findElements(webdriver.By.css('.g'));
//    // Assert that there are at least some results
//    // expect(results.length).to.be.greaterThan(0);
//});













Feature: Redmine Login Functionality

  Scenario: User logs into Redmine with correct credentials
    Given I have the Redmine login page
    When I open the login page and click on the login button
    Then The login button should be present
    And I click on login button
    And I enter my correct user id and password on the login page
    And I click on the login button
    Then I should be logged into Redmine
