import { test,expect} from '@playwright/test';
import signInPage  from '../pages/SignIn.page';
import * as account from '../../env/account.json';
import MainPage from '../pages/Page'
import Dashboard from '../pages/Dashboard.page';

let SignInPage: signInPage; 
let mainPage: MainPage;
let dashboard: Dashboard;

test.describe('Dashboard testing',  () => {
  test.beforeEach(async ({page}) => {
      SignInPage = new signInPage(page);
      mainPage = new MainPage(page);
      dashboard = new Dashboard(page);
      await mainPage.logs(page);
      await SignInPage.passLogin(account.user.login, account.user.password);
  });


  test('Check blocks appearance', async ({page}) => {
    await page.pause();
    test.slow();
    await test.step('Navigation to Dashboard and checking the visibility of info blocks',async () => {
    await page.waitForTimeout(30000);

    if(!await page.locator(dashboard.firstBlockOfDashDivs).isVisible()){
      await dashboard.changeVisibility1();
    }
    if(!await page.locator(dashboard.secondBlockOfDashDivs).isVisible()){
      await dashboard.changeVisibility2();
    }
    if(!await page.locator(dashboard.thirdBlockOfDashDivs).isVisible()){
      await dashboard.changeVisibility3();
    }
    if(!await page.locator(dashboard.fourthBlockOfDashDivs).isVisible()){
      await dashboard.changeVisibility4();
    }
    if(!await page.locator(dashboard.fifthBlockOfDashDivs).isVisible()){
      await dashboard.changeVisibility5();
    }
    await expect(page.locator(dashboard.firstBlockOfDashDivs)).toBeVisible();
    await expect(page.locator(dashboard.secondBlockOfDashDivs)).toBeVisible();
    await expect(page.locator(dashboard.thirdBlockOfDashDivs)).toBeVisible();
    await expect(page.locator(dashboard.fourthBlockOfDashDivs)).toBeVisible();
    await expect(page.locator(dashboard.fifthBlockOfDashDivs)).toBeVisible();
    })

    })

    test('Check blocks appearance after turning them off', async ({page}) => {

    test.slow();
    await test.step('Turning off all info blocks',async () => {
    await mainPage.clickElement(dashboard.settingsBtn);await mainPage.waitSomeTime(1000);
    await mainPage.clickElement(dashboard.deactivateBtn1);await mainPage.waitSomeTime(1000);
    await mainPage.clickElement(dashboard.deactivateBtn2);await mainPage.waitSomeTime(1000);
    await mainPage.clickElement(dashboard.deactivateBtn3);await mainPage.waitSomeTime(1000);
    await mainPage.clickElement(dashboard.deactivateBtn4);await mainPage.waitSomeTime(1000);
    await mainPage.clickElement(dashboard.deactivateBtn5);await mainPage.waitSomeTime(1000);
    await mainPage.clickElement(dashboard.closeDeactivTab);await mainPage.waitSomeTime(5000);
    })

    await test.step('Expecting that blocks are not visible after turning them off',async () => {
    await expect(page.locator(dashboard.firstBlockOfDashDivs)).toBeHidden();
    await expect(page.locator(dashboard.secondBlockOfDashDivs)).toBeHidden();
    await expect(page.locator(dashboard.thirdBlockOfDashDivs)).toBeHidden();
    await expect(page.locator(dashboard.fourthBlockOfDashDivs)).toBeHidden();
    await expect(page.locator(dashboard.fifthBlockOfDashDivs)).toBeHidden();
    })

    })

    test('Turn on blocks after',async ({page}) => {

    test.slow();
    await test.step('Turning on all blocks back after testing',async () => {
    await mainPage.clickElement(dashboard.settingsBtn);await mainPage.waitSomeTime(1000);
    await mainPage.clickElement(dashboard.deactivateBtn1);await mainPage.waitSomeTime(1000);
    await mainPage.clickElement(dashboard.deactivateBtn2);await mainPage.waitSomeTime(1000);
    await mainPage.clickElement(dashboard.deactivateBtn3);await mainPage.waitSomeTime(1000);
    await mainPage.clickElement(dashboard.deactivateBtn4);await mainPage.waitSomeTime(1000);
    await mainPage.clickElement(dashboard.deactivateBtn5);await mainPage.waitSomeTime(1000);
    })

  })
});





