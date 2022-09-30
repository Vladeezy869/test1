import { test,expect} from '@playwright/test';
import signInPage  from '../pages/SignIn.page';
import * as account from '../../env/account.json';
import MainPage from '../pages/Page'
import Facilities from '../pages/Facilities.page';
let SignInPage: signInPage; 
let mainPage: MainPage;
let facilities: Facilities;

test.describe.serial('Facilities testing',  () => {
  test.beforeEach(async ({page}) => {
    SignInPage = new signInPage(page);
    mainPage = new MainPage(page);
    facilities = new Facilities(page);
    await mainPage.logs(page);
    await SignInPage.passLogin(account.user.login, account.user.password);
});

test('Checking all checkboxes', async ({page}) => { 

    test.slow();

    await test.step('Navigation to Property --> Facilities',async () => {
    await mainPage.clickElement(facilities.propertyTab);
    await mainPage.clickElement(facilities.facilitiesTab);
    })

    await test.step('Checking that Facilities are visible, turning all of them ON and saving changes',async () => {
    await(expect(page.locator(facilities.facilitiesDiv)).toBeVisible());
    await page.waitForTimeout(20000)
    await facilities.clickAllCheckboxes();
    await mainPage.clickElement(facilities.saveBtn);
    await page.waitForTimeout(20000)
    })

    await test.step('Turning all of checkboxes off after testing',async () => {
    await facilities.clickAllCheckboxes();
    await mainPage.clickElement(facilities.saveBtn);
    })

})
})  