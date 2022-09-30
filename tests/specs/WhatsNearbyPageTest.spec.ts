import { test,expect} from '@playwright/test';
import signInPage  from '../pages/SignIn.page';
import * as account from '../../env/account.json';
import MainPage from '../pages/Page'
import WhatsNearby from '../pages/WhatsNearby.page';
let SignInPage: signInPage; 
let mainPage: MainPage;
let whatsNearby: WhatsNearby;
let value = '1';

test.describe.serial('What\'s nearby testing',  () => {
  test.beforeEach(async ({page}) => {
    SignInPage = new signInPage(page);
    mainPage = new MainPage(page);
    whatsNearby = new WhatsNearby(page);
    await mainPage.logs(page);
    await SignInPage.passLogin(account.user.login, account.user.password);
});

test('Add transportations and save', async ({page}) => { 
  //add airport
  test.slow();
   await test.step('Navigation to What`s Nearby',async () => {
    await mainPage.clickElement(whatsNearby.propertyTab);
    await mainPage.clickElement(whatsNearby.whatsNearbyTab);
   })

    await test.step('Adding new transportation method',async () => {
    await mainPage.clickElement(whatsNearby.transportation);
    await mainPage.clickElement(whatsNearby.addNewBtn);
    await mainPage.clickElement(whatsNearby.airpodCode);
    await mainPage.inputText(whatsNearby.airpodCode, value);
    await mainPage.clickElement(whatsNearby.distanceAirpod);
    await mainPage.inputText(whatsNearby.distanceAirpod, value);
    await mainPage.clickElement(whatsNearby.unitsAirpod);
    await expect(page.locator(whatsNearby.unitsDrop)).toBeVisible();
    await page.locator(whatsNearby.saveBtn).click();
    })

    await test.step('Deleting created transportation method after testing',async () => {
    await mainPage.clickElement(whatsNearby.deleteBtn);
    await mainPage.clickElement(whatsNearby.saveBtn);
    })

})
})
