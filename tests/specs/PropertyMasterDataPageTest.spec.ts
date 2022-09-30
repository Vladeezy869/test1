import { test,expect} from '@playwright/test';
import signInPage  from '../pages/SignIn.page';
import * as account from '../../env/account.json';
import MainPage from '../pages/Page'
import Property from '../pages/Property.page';
let SignInPage: signInPage; 
let mainPage: MainPage;
let property: Property;


test.describe.serial('Master data testing',  () => {
  test.beforeEach(async ({page}) => {
    SignInPage = new signInPage(page);
    mainPage = new MainPage(page);
    property = new Property(page);
    await mainPage.logs(page);
    await SignInPage.passLogin(account.user.login, account.user.password);
});

  test('Delete and upload logo testing', async ({page}) => { 

    test.slow();
    
    await test.step('Navigation to Property --> Master Data --> Property',async () => {
    await mainPage.clickElement(property.propertyTab);
    await mainPage.clickElement(property.masterDataTab);                                                  await mainPage.waitSomeTime(60000);
    })

    await test.step('Uploading a Logo',async () => {
    await page.mouse.wheel(1,1000);
    await expect(page.locator(property.deleteLogoImage)).toBeVisible();                                   await mainPage.waitSomeTime(5000);
    await mainPage.clickElement(property.deleteLogoImage);                                                await mainPage.waitSomeTime(4000);
    await property.uploadLogo();
    await mainPage.clickElement(property.saveBtn);                                                        await mainPage.waitSomeTime(60000);
    })

  });

  test('Check all fields. 1) Property name', async({page})=>{
    
    test.slow();
    
    await test.step('Testing changing Property Name',async () => {
    await mainPage.clickElement(property.propertyTab);
    await mainPage.clickElement(property.masterDataTab);                                                  await mainPage.waitSomeTime(60000);
    await mainPage.inputText(property.propertyElement,property.propertyName);                             await mainPage.waitSomeTime(13000);
    })

  })

  test('Check all fields. 2) Property type', async({page})=>{
    
    test.slow();
    
    await test.step('Testing changing Property Type',async () => {
    await mainPage.clickElement(property.propertyTab);
    await mainPage.clickElement(property.masterDataTab);                                                  await mainPage.waitSomeTime(60000);
    await mainPage.clickElement(property.propertyType);
    await expect(page.locator(property.propertyTypeDropDown)).toBeVisible();                              await mainPage.waitSomeTime(2000);
    await mainPage.clickElement(property.propertyElement);
    })

  })

  test('Check all fields. 3) Capacity & Rooms and Beds', async({page})=>{
    
    test.slow();
    
    await test.step('Testing changing Property Capacity and Rooms/Beds checkboxes',async () => {
    await mainPage.clickElement(property.propertyTab);
    await mainPage.clickElement(property.masterDataTab);                                                  await mainPage.waitSomeTime(60000);
    await mainPage.inputText(property.propertyCapacity,'99');
    await expect(page.locator(property.propertyCapacity)).toHaveValue('99');                              await mainPage.waitSomeTime(2000);
    await mainPage.clickElement(property.propertyRadioBeds);
    await mainPage.clickElement(property.propertyRadioRooms);
    })

  })

  test('Check all fields. 4) Telephone number & Email & Website', async({page})=>{
  
    test.slow();

    await test.step('Testing changing Telephone number & Email & Website',async () => {
    await mainPage.clickElement(property.propertyTab);
    await mainPage.clickElement(property.masterDataTab);                                                  await mainPage.waitSomeTime(60000);
    await mainPage.inputText(property.telephoneNumber,'+49-152-33613029');
    await expect(page.locator(property.telephoneNumber)).toHaveValue('+49-152-33613029');                 await mainPage.waitSomeTime(2000);
    await mainPage.inputText(property.propertyPrimaryEmail,'claudiu.simina@cultuzz.com');
    await expect(page.locator(property.propertyPrimaryEmail)).toHaveValue('claudiu.simina@cultuzz.com');  await mainPage.waitSomeTime(2000);
    await mainPage.inputText(property.propertyWebsite,'https://www.cultswitch.com');
    await expect(page.locator(property.propertyWebsite)).toHaveValue('https://www.cultswitch.com');       await mainPage.waitSomeTime(2000);
    })

  })

  test('Check all fields. 5) Currency', async({page})=>{
  
    test.slow();
    
    await test.step('Testing changing Currency',async () => {
    await mainPage.clickElement(property.propertyTab);
    await mainPage.clickElement(property.masterDataTab);                                                  await mainPage.waitSomeTime(60000);
    await mainPage.clickElement(property.propertyCurrency);                                               await mainPage.waitSomeTime(10000);
    await expect(page.locator(property.propertyTypeDropDown2)).toBeVisible();                             await mainPage.waitSomeTime(1000);
    })

  })

test.describe.serial('Address testing',()=>{

  test('Check all fields. 1) Street, No.', async({page})=>{
   
    test.slow();
    
    await test.step('Navigation to Property --> Master Data --> Address',async () => {
    await mainPage.clickElement(property.propertyTab);
    await mainPage.clickElement(property.masterDataTab);                                                  await mainPage.waitSomeTime(10000);
    await mainPage.clickElement(property.address);                                                        await mainPage.waitSomeTime(40000);
    })

    await test.step('Testing changing Street, No.',async () => {
    await mainPage.inputText(property.addressStreet,"Ullsteinstraße 130");
    await expect(page.locator(property.addressStreet)).toHaveValue('Ullsteinstraße 130');                 await mainPage.waitSomeTime(2000);
    await mainPage.inputText(property.secondAddress,"Ullsteinstraße 130");
    await expect(page.locator(property.secondAddress)).toHaveValue('Ullsteinstraße 130');                 await mainPage.waitSomeTime(2000);
    await mainPage.clearInput(property.secondAddress);
    })

  })

  test('Check all fields. 2) Postal code & City', async({page})=>{
  
    test.slow();
    
    await test.step('Testing changing Street, No.',async () => {
    await mainPage.clickElement(property.propertyTab);
    await mainPage.clickElement(property.masterDataTab);                                                  await mainPage.waitSomeTime(10000);
    await mainPage.clickElement(property.address);                                                        await mainPage.waitSomeTime(40000);
    await mainPage.inputText(property.postalCode,"12109");
    await expect(page.locator(property.postalCode)).toHaveValue('12109');                                 await mainPage.waitSomeTime(2000);
    await mainPage.inputText(property.city, "Berlin");
    await expect(page.locator(property.city)).toHaveValue('Berlin');                                      await mainPage.waitSomeTime(2000);
    })

  })

  test('Check all fields. 3) Country & State + GeoData', async({page})=>{
   
    test.slow();
    
    await test.step('Testing changing Country & State + GeoData',async () => {
    await mainPage.clickElement(property.propertyTab);
    await mainPage.clickElement(property.masterDataTab);                                                  await mainPage.waitSomeTime(10000);
    await mainPage.clickElement(property.address);                                                        await mainPage.waitSomeTime(40000);
    //await mainPage.clickElement(property.country);
    //await expect(page.locator(property.countryDropDown)).toBeVisible();                                   await mainPage.waitSomeTime(1000);
    await mainPage.clickElement(property.postalCode);
    await mainPage.clickElement(property.stateOrProvince);
    await expect(page.locator(property.stateDropDown)).toBeVisible();                                     await mainPage.waitSomeTime(1000);
    await mainPage.clickElement(property.stateOrProvince);
    await mainPage.inputText(property.latitude,"52.62000660");
    await expect(page.locator(property.latitude)).toHaveValue('52.62000660');                             await mainPage.waitSomeTime(2000);
    await mainPage.inputText(property.longitude,"13.50495400");
    await expect(page.locator(property.longitude)).toHaveValue('13.50495400');                            await mainPage.waitSomeTime(2000);
    })

  })
})
test.describe.serial('IDs & Property Group testing',()=>{

  test('IDs', async({page})=>{
    
    test.slow();
  
    await test.step('Navigation to IDs',async () => {
    await mainPage.clickElement(property.propertyTab);
    await mainPage.clickElement(property.masterDataTab);                                                  await mainPage.waitSomeTime(10000);
    await mainPage.clickElement(property.IDs);                                                            await mainPage.waitSomeTime(40000);
    })

    await test.step('Testing changing IDs values',async () => {
    await mainPage.checkAvailability(property.bookingCom);
    await mainPage.checkAvailability(property.expedia);
    await mainPage.checkAvailability(property.HRS);
    await mainPage.checkAvailability(property.cultSwitch);
    await mainPage.checkAvailability(property.roomDB);
    await mainPage.checkAvailability(property.eHotel);
    })

  })

  // test('Property Group', async({page})=>{ 
  //   await mainPage.clickElement(property.propertyTab);
  //   await mainPage.clickElement(property.masterDataTab);                                                  await mainPage.waitSomeTime(2000);
  //   await mainPage.clickElement(property.propertyGroup);                                                  await mainPage.waitSomeTime(2000);
  //   await mainPage.clickElement(property.changePropGroupDrDw);
  //   await expect(page.locator(property.changePropGroupSearch)).toBeVisible();                             await mainPage.waitSomeTime(1000);
  // })
})
})