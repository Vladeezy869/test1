import { test,Page,expect} from '@playwright/test';
import signInPage  from '../pages/SignIn.page';
import * as account from '../../env/account.json';
import MainPage from '../pages/Page'
import Products from '../pages/Products.page';

let SignInPage: signInPage; 
let mainPage: MainPage;
let products: Products;
let testText = "sdfhsjkdfhsdkfjhsfkjsdf";

test.describe.serial('Inventory testing',  () => {
  test.beforeEach(async ({page}) => {
    SignInPage = new signInPage(page);
    mainPage = new MainPage(page);
    products = new Products(page);
    await mainPage.logs(page);
    await SignInPage.passLogin(account.user.login, account.user.password);
});

    test('Inventory testing 2) Rate plans', async ({page}) => {

    test.slow();
    await test.step('Navigation to Inventory --> Rate plans',async () => {
    await products.gotoRatePlans();
    })

    await test.step('Adding new Rate Plan',async () => {
    await products.addNewRatePlan();
    })

    await test.step('Searching created Rate Plan after creating and expecting to see it',async () => {
    await products.searchForRatePlan();
    })

    await test.step('Deleting created Rate Plan after testing',async () => {
    await products.deleteRatePlan();
    })

})
})