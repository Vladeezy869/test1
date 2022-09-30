import { test,expect} from '@playwright/test';
import signInPage  from '../pages/SignIn.page';
import * as account from '../../env/account.json';
import MainPage from '../pages/Page'
import Management from '../pages/Management.page';

let SignInPage: signInPage; 
let mainPage: MainPage;
let management: Management;


test.describe.serial('Management testing',  () => {
  test.beforeEach(async ({page}) => {
    SignInPage = new signInPage(page);
    mainPage = new MainPage(page);
    management = new Management(page);
    await mainPage.logs(page);
    await SignInPage.passLogin(account.user.login, account.user.password);
});

  test('Properties testing', async({page})=>{
    
    test.slow();
    let temp = await management.generateRandomPropName();
    await test.step('Navigation to Management --> Properties',async () => {
    await mainPage.clickElement(management.managementBtn);
    await mainPage.clickElement(management.managementProp);
    })

    await test.step('Clicking "Add new Property" and expecting to see Modal Window for creating it',async () => {
    await expect(page.locator(management.addNewPropBtn)).toBeVisible();
    await mainPage.clickElement(management.addNewPropBtn);
    await expect(page.locator(management.modal)).toBeVisible();
    })

    await test.step('Filling all neccessary information for creating a Property',async () => {
    await mainPage.clickElement(management.propertyOrHotelName);
    await mainPage.inputText(management.propertyOrHotelName,temp);
    await mainPage.clickElement(management.streetNo);
    await mainPage.inputText(management.streetNo,'111111');
    await mainPage.clickElement(management.phoneNo);
    await mainPage.inputText(management.phoneNo,'+77777777777');
    await mainPage.clickElement(management.postal);
    await mainPage.inputText(management.postal,'0020123');
    await mainPage.clickElement(management.city);
    await mainPage.inputText(management.city,'Paris');
    await mainPage.clickElement(management.email);
    await mainPage.inputText(management.email,'automated-testing.01@cultuzz.com');
    await mainPage.clickElement(management.country);
    await mainPage.clickElement(management.testCountry);
    await mainPage.clickElement(management.currency);
    await mainPage.clickElement(management.testCurrency);
    await mainPage.clickElement(management.saveBtn);
    await mainPage.waitSomeTime(20000);
    await mainPage.clickElement(management.searchField);
    await mainPage.inputText(management.searchField,temp);
    await expect(page.locator(management.searchResult)).toBeVisible();
    })
    //to be finished

  })

  test('Users & Roles testing', async({page})=>{

    test.slow();
    await test.step('Navigation to Management --> Users & Roles',async () => {
    await mainPage.clickElement(management.managementBtn);
    await mainPage.clickElement(management.managementUsersNroles);
    })

    await test.step('Clicking "Add new User" and filling all necessary info',async () => {
    await management.waitForUsersRoles();
    await mainPage.clickElement(management.addUser);
    await mainPage.clickElement(management.addUserMail);
    await mainPage.inputText(management.addUserMail,"automated-testing.03@cultuzz.com");
    await mainPage.clickElement(management.addUserRole);
    await mainPage.clickElement(management.supplierRole);
    await mainPage.clickElement(management.addUserRole);
    await mainPage.clickElement(management.adduserSave);
    })

    await test.step('Expecting to see new Added user',async () => {
    await expect(page.locator(management.expectedLabel)).toBeVisible();
    })

    await test.step('Deleting Added user',async () => {
    await mainPage.clickElement(management.deleteUser);
    await mainPage.clickElement(management.confirmDelete);
    await expect(page.locator(management.deletedAlert)).toBeVisible();
    })

  })

})