
const { Key } = require('webdriver');
describe("Interaction with booking", function () {
  it("Test the website", async function () {
    const currentDate = new Date();
    const checkInDate = new Date(currentDate + 1).toISOString().split('T')[0];
    const daysToAdd = 2;
    const currentTimeStamp = currentDate.getTime();
    const newTimeStamp = currentTimeStamp + (daysToAdd * 24 * 60 * 60 * 1000);

    currentDate.setTime(newTimeStamp);
    checkOutDate = currentDate.toISOString().split('T')[0];
    
    //WebSite Call
    console.log("WebSite Call");

    await browser.url('/');
    //maximizeWindow();

    //PopUp Cancel
    console.log("PopUp Cancel");

    await browser.pause(5000);
    const popup = await $('//*[contains(@class,"fc63351294 a822bdf511 e3c025e003 fa565176a8 f7db01295e c334e6f658 ae1678b153")]');
    await popup.waitForDisplayed({ timeout: 10000 });
    await popup.click();

    //Language Icon Click
    console.log("Language Icon Click");
    const languageIcon = await $('//*[contains(@class,"c3194e6c89 e5eb7fb6cb e418d76df7")]');
    await languageIcon.waitForDisplayed({ timeout: 5000 });
    await languageIcon.click();
    
    //English UK selected
    console.log("English UK selected");
    const englishUKOption = await $('//*[contains(@class,"b1e6dd8416 aacd9d0b0a e3d479393e")]');
    await englishUKOption.click();
    
    //Currency Icon Click
    console.log("Currency Icon Click");
    const currencyIcon = await $('//*[contains(@class,"fc63351294 a822bdf511 e3c025e003 cfb238afa1 c334e6f658 e634344169")]');
    await currencyIcon.waitForDisplayed({ timeout: 5000 });
    await currencyIcon.click();
    
    //AUD Selected
    console.log("AUD Selected");
    const dollarOption = await $('//*[text()="Australian Dollar"]');
    await dollarOption.waitForDisplayed({ timeout: 5000 });
    await dollarOption.click();
    
     //Write Kandy in search
    console.log("Write Kandy in search");
    const search = await $('[id=":Ra9:"]').setValue("Kandy");
    const checkinandout = await $('//*[contains(@class,"d47738b911 e246f833f7 fe211c0731")]');

    //Check-In clicked
    console.log("Check-In clicked");
    await checkinandout.waitForDisplayed({ timeout: 5000 });
    checkinandout.click();
    await browser.pause(2000);

    //Check-In and Out Set
    console.log("Check-In and Out Set");
    const elementSelector = '[data-date="' + checkInDate + '"]';
    const element = await browser.$(elementSelector);
    element.click();
    const elementSelector2 = '[data-date="' + checkOutDate + '"]';
    const element2 = await browser.$(elementSelector2);
    element2.click();

    //Adult 1 selected
    console.log("Adult 1 selected");
    const adult = await $('//*[contains(@class,"b6dc9a9e69 f8931b3e81 e25355d3ee")]');
    await adult.waitForDisplayed({ timeout: 5000 });
    await adult.click();

    const adult1 = await $('//*[contains(@class,"fc63351294 a822bdf511 e3c025e003 fa565176a8 f7db01295e c334e6f658 e1b7cfea84 cd7aa7c891")]');
    await adult1.waitForDisplayed({ timeout: 5000 });
    await adult1.click();


    const clickadult = await $('//*[contains(@class,"fc63351294 a822bdf511 e2b4ffd73d f7db01295e c938084447 a9a04704ee d285d0ebe9")]');
    await clickadult.waitForDisplayed({ timeout: 5000 });
    await clickadult.click();
    await browser.pause(2000);
    
    //Search Button Clicked
    console.log("Search Button Clicked");
    const searchReuslt = await $('//*[contains(@class,"fc63351294 a822bdf511 d4b6b7a9e7 cfb238afa1 c938084447 f4605622ad aa11d0d5cd")]');
    await searchReuslt.waitForDisplayed({ timeout: 5000 });
    await searchReuslt.click();
    
    //Rating 5 stars
    console.log("Rating 5 stars");
    const rating = await $('//*[text()="5 stars"]');
    await rating.waitForDisplayed({ timeout: 5000 });
    await rating.click();

    //Sort By according to rate
    console.log("Sort By according to rate");
    const sortBy = await $('//*[contains(@class,"fc63351294 a822bdf511 e2b4ffd73d fa565176a8 f7db01295e c334e6f658 f95c50be27 a9a04704ee")]');
    await sortBy.waitForDisplayed({ timeout: 5000 });
    await sortBy.click();

    const price = await $('//*[text()="Price (lowest first)"]');
    await price.waitForDisplayed({ timeout: 5000 });
    await price.click();

    await browser.pause(2000);

    //Property Selected
    console.log("Property Selected");
    const cardElements = await $$('div[data-testid="property-card"]');
    if (cardElements.length >= 2) {
      await cardElements[1].click();
    }
    await browser.pause(5000);
   

    const windowHandles = await browser.getWindowHandles();
    await browser.switchToWindow(windowHandles[windowHandles.length - 1]);

    //Room 1 selected
    console.log("Room 1 selected");
    const selectElement = await $('//*[contains(@class,"hprt-nos-select js-hprt-nos-select")]');

    await selectElement.selectByIndex(1);

    //Reserve Button
    console.log("Reserve Button");
    try {
      const button = await $('#hp_book_now_button');
      await browser.execute((element) => {
        element.click();
      }, button);
    }
    catch {

    }
    await browser.pause(2000);
    
    //Add Detail name etc
    console.log("Add Detail name etc");
    const firstname = await $('[id="firstname"]').setValue("Automation");
    const lastname = await $('[id="lastname"]').setValue("Testing");
    const email = await $('[id="email"]').setValue("aaa@gmail.com");
    await browser.pause(2000);
    const nextstep = await $('[name="book"]').click();
    await browser.pause(2000);
    const main = await $('//*[contains(@class,"bk-icon -streamline-booking_logo_dark_bg_mono")]');
    await main.waitForDisplayed({ timeout: 5000 });
    await main.click();
    
    //Add to cart removed
    console.log("Add to cart removed");
    await browser.pause(5000);
    const close = await $('//*[contains(@class,"notice-item-close-x")]');
    await close.waitForDisplayed({ timeout: 5000 });
    await close.click();

    await browser.pause(5000);
  });

});

// Maximize the window
function maximizeWindow() {
  if (!isWindowMaximized()) {
    window.moveTo(0, 0);
    window.resizeTo(screen.availWidth, screen.availHeight);
  }
}

function isWindowMaximized() {
  return window.outerWidth === screen.availWidth && window.outerHeight === screen.availHeight;
}