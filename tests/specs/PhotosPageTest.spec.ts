import { test,expect} from '@playwright/test';
import signInPage  from '../pages/SignIn.page';
import * as account from '../../env/account.json';
import MainPage from '../pages/Page'
import Photo from '../pages/Photo.page';

let SignInPage: signInPage; 
let mainPage: MainPage;
let photoPage: Photo;


test.describe.serial('Photos testing',  () => {
  test.beforeEach(async ({page}) => {
    SignInPage = new signInPage(page);
    mainPage = new MainPage(page);
    photoPage = new Photo(page);
    await mainPage.logs(page);
    await SignInPage.passLogin(account.user.login, account.user.password);
});

test('Uploading new photo and deleting it then', async ({page}) => { 

    test.slow();

    await test.step('Navigation to Property --> Photos',async () => {
    await mainPage.clickElement(photoPage.propertyTab);
    await mainPage.clickElement(photoPage.photosTab);
    })

    await test.step('Uploading a Photo and expecting that it is visible',async () => {
    await photoPage.uploadLogo();
    await page.waitForTimeout(15000);
    await expect(page.locator(photoPage.uploadedPhoto)).toBeVisible();
    await mainPage.clickElement(photoPage.mediaLibrary);
    await page.waitForTimeout(15000);
    await expect(page.locator(photoPage.uploadedPhotoFromLibrary)).toBeVisible();
    await expect(page.locator(photoPage.nameOfUploadedPhoto)).toHaveValue('hotelTest');
    })

    await test.step('Deleting uploaded Photo',async () => {
    await mainPage.clickElement(photoPage.uploadedPhotoFromLibrary);
    await mainPage.clickElement(photoPage.deletePhoto);
    await page.waitForTimeout(10000);
    await mainPage.clickElement(photoPage.closeMediaLibrary);
    })
    
})
})