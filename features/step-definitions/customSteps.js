const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { expect } = require('chai')
const webdriver = require('selenium-webdriver');

const  { crd } = require ("../../config/credential")


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

    When('I open the login page and click on the login button', function () {
      // Write code here that turns the phrase above into concrete actions
      return 'pending';
    });



    Given('I have the Redmine login page',async function () {
       
        await new Promise(resolve => setTimeout(resolve, 2000));


        await driver.get('http://localhost:3100/')

      });


      

      Then('The login button should be present',async function () {

        // check login button Availability in home page 

        const loginButton = await driver.findElement(webdriver.By.className("login"));
        expect(await loginButton.isDisplayed()).to.be.true;

        if (!loginButton){
            console.error('login button is not present. test faild');
        }else{
            console.log('login button is present, proddeding with the test')
        }

        await new Promise(resolve => setTimeout(resolve, 2000));


      });


      //Open login page 

          When('I open the login page', async function () {
            await new Promise(resolve => setTimeout(resolve, 2000));

           await driver.findElement(webdriver.By.className("login")).click();

           await new Promise(resolve => setTimeout(resolve, 2000));

          });

          // Check login page  
          When('Verify login page', async function () {
            expect(await driver.findElement(webdriver.By.id("login-form")).isDisplayed()).to.be.true;
        });
 
          // Enter Correct User id and incrroct password on the login page

          When('I enter my correct user id and incorrect password on the login page',async function () {
            
            await driver.findElement(webdriver.By.id("username")).sendKeys(crd.username);
            await driver.findElement(webdriver.By.id("password")).sendKeys("crd.password");
            await new Promise(resolve => setTimeout(resolve, 2000));

          });
          
          // Enter incorrect user id and correct password on the login page
       
         When('I enter an incorrect user id and correct password on the login page',async function () {


          await driver.findElement(webdriver.By.id("username")).sendKeys("crd.username");
          await driver.findElement(webdriver.By.id("password")).sendKeys(crd.password);

         });

          // Enter incorrect user id and password on login page 

          When('I Enter wrong the user id and password on the login page',async function () {
            
            await driver.findElement(webdriver.By.id("username")).sendKeys("crd.username");
            await driver.findElement(webdriver.By.id("password")).sendKeys("crd.password");

          });
        

          // This test case is for both if user is incorrect and password is incorrect 

          Then('I should see an error message indicating invalid credentials',async function () {
          
            expect(await driver.findElement(webdriver.By.id("flash_error")).isDisplayed()).to.be.true;
          
          });


          // if user id and password is incorrect then this messages will show 

          Then('I should see an error message indicating missing credentials',async function () {
            
            expect(await driver.findElement(webdriver.By.id("flash_error")).isDisplayed()).to.be.true;

          });
 
 

 
          When('I enter my correct user id and password on the login page',async function () {
            
            await driver.findElement(webdriver.By.id("username")).sendKeys(crd.username);
            await driver.findElement(webdriver.By.id("password")).sendKeys(crd.password);
            await new Promise(resolve => setTimeout(resolve, 2000));

          });


 
          When('I click on the login button',async function () {
           await driver.findElement(webdriver.By.id("login-submit")).click();

           await new Promise(resolve => setTimeout(resolve, 3000));
          });
 

          Then('I should be logged into Redmine',async function () {
            await driver.get(crd.homelink)
          });
 
