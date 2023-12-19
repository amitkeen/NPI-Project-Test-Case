const { Builder, Browser, By, Key, until, Actions, WebDriver } = require("selenium-webdriver");
// const xpathExpression = ""

(async function example() {
  //launch the browser
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    //Navigate to our Application
    // await driver.get("http://portal.npi.keenable.in/");
    await driver.get("http://portal.npi.keenable.in/explorebharat");

    // Add a todo
    await new Promise(resolve => setTimeout(resolve, 3000));

    await driver.manage().window().maximize();
    // await driver.manage().window().fullscreen();
    
    await driver.findElement(WebDriver.By.xpath('/html/body/div[1]/div[1]/div[3]/ul/li[1]/a'))
    await driver.findElement(By.xpath("/html/body/div[1]/div[1]/div[3]/ul/li[1]/a")).click();
    // cut the timer frame 
    // await driver.findElement(By.xpath("/html/body/div[4]/div[3]/div[2]/img")).click();
    await new Promise(resolve => setTimeout(resolve, 3000));

    await driver.findElement(By.xpath("/html/body/div[3]/div[3]/div[2]/img")).click();

    // // By Humburgar Menu visit on Explor Bharat
    // await driver.findElement(By.xpath("/html/body/div[1]/div[2]/div[1]/div[4]/div[1]/div")).click();

    // // Click on Explore Bharat 

    // // await new Promise(resolve => setTimeout(resolve, 3000));

    // // // await driver.findElement(By.xpath("/html/body/div[4]/div[3]/div/div[2]/div[3]/a[1]")).click();
    // // await driver.wait(until.elementLocated(By.xpath("/html/body/div[4]/div[3]/div/div[2]/div[1]/a[1]")), 5000);

    // // await driver.findElement(By.xpath("/html/body/div[4]/div[3]/div/div[2]/div[3]/a[1]/p")).click();


    // // Click on Travel and Tourism Button 

    // await driver.findElement(By.xpath("/html/body/div[1]/div[1]/div[3]/ul/li[1]")).click();

    
    // Visit on explore Bharat Page By Landing page given below
    // scroll down 

    const scrollAmount = 70; // Adjust this for desired scroll speed

    for (let i = 0; i < 80; i++) {
      // adjust loop iterations for desired scroll distance
      await driver.executeScript(`window.scrollBy(0, ${scrollAmount});`);
      await driver.sleep(100); // adjust delay between scrolls for smoothness
    }
    
    // For opening explor bharat page 
    await driver.findElement(By.xpath("/html/body/div[1]/div[11]/div[1]/div/div/a[6]/button")).click();

    //for clicking on Menu button of Tringa 
    // await driver.findElement(By.xpath("/html/body/div[1]/div[1]/div[2]/div/div[1]/div/div")).click();

    //Click on Explore Bharat 
    // await driver.findElement(By.xpath("/html/body/div[4]/div[3]/div/div[2]/div[3]/a[1]/p")).click();

    await new Promise(resolve => setTimeout(resolve, 10000))
    //Refresh Explor Bharat Page
    // await driver.navigate().refresh();  

    //Click on Travel and Tourism

    await driver.findElement(By.xpath("/html/body/div[1]/div[1]/div[3]/ul/li[1]")).click();


    // Find the element you want to triple-click
    // let element = await driver.findElement(By.xpath("/html/body/div[1]/div[4]/section[1]/div/h1"));

    // // Create an Actions instance
    // let actions = new Actions(driver);

    // // Perform three consecutive clicks
    // await actions.click(element).click(element).click(element).perform();
    // // await driver.findElement(By.className("cursor-pointer")).click();

  } finally {
    await driver.wait();
  }
})

();

