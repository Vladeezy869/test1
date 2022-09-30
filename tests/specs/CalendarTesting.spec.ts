import { test,expect} from '@playwright/test';
import signInPage  from '../pages/SignIn.page';
import * as account from '../../env/account.json';
import MainPage from '../pages/Page'
import Calendar from '../pages/Calendar.page';

let SignInPage: signInPage; 
let mainPage: MainPage;
let calendar: Calendar;


test.describe.serial('Calendar testing',  () => {
  test.beforeEach(async ({page}) => {
    SignInPage = new signInPage(page);
    mainPage = new MainPage(page);
    calendar = new Calendar(page);
    await mainPage.logs(page);
    await SignInPage.passLogin(account.user.login, account.user.password);
});

test('Calendar testing', async({page})=>{
  
  test.slow();
  

  await test.step('Wait for calendar to be loaded',async () => {
    await calendar.calendarLoading();
  })

  await test.step('Calendar: Checking room filter',async () => {
    await expect(page.locator(calendar.restrictionDiv)).toBeVisible();
    await expect(page.locator(calendar.roomsFilter)).toBeVisible();
    await mainPage.clickElement(calendar.roomsFilter);
    await expect(page.locator(calendar.roomsFilterInner)).toBeVisible();
    await mainPage.clickElement(calendar.roomsFilter);
  })

  await test.step('Calendar: Checking restrictions filter',async () => {
    await expect(page.locator(calendar.restrictions)).toBeVisible();
    await mainPage.clickElement(calendar.restrictions);
    await expect(page.locator(calendar.restrictionsInner)).toBeVisible();
    await mainPage.clickElement(calendar.restrictions);
  })

  await test.step('Calendar: Checking checking visibility of main buttons',async () => {
    await expect(page.locator(calendar.dateFrom)).toBeVisible();
    await expect(page.locator(calendar.dateUntill)).toBeVisible();
    await expect(page.locator(calendar.setPeriod)).toBeVisible();
  })

})
})