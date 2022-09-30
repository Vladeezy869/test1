// import { test,expect} from '@playwright/test';
// import signInPage  from '../pages/SignIn.page';
// import * as account from '../../env/account.json';
// import MainPage from '../pages/Page'
// import Reservations from '../pages/Reservations.page';
// let SignInPage: signInPage; 
// let mainPage: MainPage;
// let reservations: Reservations;

// test.describe.serial('Reservation testing',  () => {
//   test.beforeEach(async ({page}) => {
//     SignInPage = new signInPage(page);
//     mainPage = new MainPage(page);
//     reservations = new Reservations(page);
//     await SignInPage.passLogin(account.user.login, account.user.password);
// });
      
//   test('Check main buttons', async ({page}) => { 

//     test.slow();

//     await test.step('Navigation to Reservations',async () => {
//     await mainPage.clickElement(reservations.reservationsTab);
//     await mainPage.waitSomeTime(10000);
//     await mainPage.clickElement(reservations.showBtn);
//     await mainPage.waitSomeTime(30000);
//     })

//     await test.step('Checking all main buttons',async () => {
//     await expect(page.locator(reservations.searchForBtn)).toBeVisible();
//     await expect(page.locator(reservations.fromBtn)).toBeVisible();
//     await expect(page.locator(reservations.untilBtn)).toBeVisible();
//     await expect(page.locator(reservations.showBtn)).toBeVisible();
//     await expect(page.locator(reservations.filtersBtn)).toBeVisible();
//     })

//     })

//   test('Check mails', async ({page}) => { 
//     test.slow();
//     await test.step('Checking mails on Reservation tab',async () => {
//     await mainPage.clickElement(reservations.reservationsTab);
//     await mainPage.clickElement(reservations.showBtn);
//     await mainPage.clickElement(reservations.firstCheckMail);
//     await mainPage.clickElement(reservations.clientCloseBtn);
//     })

//   });

//   test('Check person', async({page}) => {
//     test.slow();
//     await test.step('Checking persons on Reservation tab',async () => {
//     await mainPage.clickElement(reservations.reservationsTab);
//     await mainPage.clickElement(reservations.showBtn);
//     await mainPage.clickElement(reservations.firstCheckPerson);
//     await expect(page.locator(reservations.personModal)).toBeVisible();
//     await mainPage.clickElement(reservations.closePersonModal);
//     })

//   })

//   test('Check plan', async({page}) => {
//     test.slow();
//     await test.step('Checking plans on Reservation tab',async () => {
//     await mainPage.clickElement(reservations.reservationsTab);
//     await mainPage.clickElement(reservations.showBtn);
//     await mainPage.clickElement(reservations.firstCheckProduct);
//     await expect(page.locator(reservations.productModal)).toBeVisible();
//   })

// })
// })