import { test,expect} from '@playwright/test';
import * as account from '../../env/account.json';
import MainPage from '../pages/Page'
import CreateAuser from '../pages/CreateAuser.page';

let mainPage: MainPage;
let createUser: CreateAuser;

test.describe('Create an account',  () => {
  test.beforeEach(async ({page}) => {
    createUser = new CreateAuser(page);
    mainPage = new MainPage(page);
    await mainPage.logs(page);
  });

  test('Create an account & Log in', async ({page}) => { 
    test.slow();
    let  tempmail = await createUser.generateMail();
    await test.step('Navigation and filling all neccessary information',async () => {
      await createUser.navigateToRegistrationPage();
      await createUser.enterEmail(tempmail);
      await mainPage.clickElement(createUser.requiredCheckbox);
      await mainPage.clickElement(createUser.submitBtn);
      await createUser.enterPassword();
      await mainPage.clickElement(createUser.submitBtn);
      await createUser.waitForSuccessMessage();
    })
    
    let authUrl;
    await test.step('Navigation to Mailsac and finishing creating an account',async () => {
      await page.waitForTimeout(15000);
      authUrl = await createUser.getMailsacMsgIdByIndex(tempmail, 0).then(async (links) => {
     return links[1];
    })
    })
    
    await test.step('Attempt to Log In via just created account',async () => {
    await page.goto(authUrl);
     await createUser.enterDetailsAndProceed();
    });
   
  });
})