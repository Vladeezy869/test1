import { test} from '@playwright/test';
import signInPage  from '../pages/SignIn.page';
import * as account from '../../env/account.json';
import MainPage from '../pages/Page'
import Products from '../pages/Products.page';

let SignInPage: signInPage; 
let mainPage: MainPage;
let products: Products;

test.describe.serial('Inventory testing',  () => {
  test.beforeEach(async ({page}) => {
    SignInPage = new signInPage(page);
    mainPage = new MainPage(page);
    products = new Products(page);
    await mainPage.logs(page);
    await SignInPage.passLogin(account.user.login, account.user.password);
});

  test('Inventory testing 1) Room types', async ({page}) => { 

    test.slow();

    await test.step('Navigation to Inventory --> Room Types',async () => {
    await products.navigation();
    })

    await test.step('Adding new Room Type',async () => {
    await products.addingNewRoom();
    })

    await test.step('Searching for a created Room Type and expecting to see it',async () => {
    await products.searchTest();
    })

    await test.step('Testing editing of Room Type and then deleting it',async () => {
    await products.editRoom();
    await products.deleteRoom();
    })

  })
})