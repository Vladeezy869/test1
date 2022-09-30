import { test,Page,expect} from '@playwright/test';
import signInPage  from '../pages/SignIn.page';
import * as account from '../../env/account.json';
import MainPage from '../pages/Page'
import Property from '../pages/Property.page';

let SignInPage: signInPage; 
let mainPage: MainPage;
let property: Property;
let testText = "sdfhsjkdfhsdkfjhsfkjsdf";

test.describe.serial('Property testing',  () => {
  test.beforeEach(async ({page}) => {
    SignInPage = new signInPage(page);
    mainPage = new MainPage(page);
    property = new Property(page);
    await mainPage.logs(page);
    await SignInPage.passLogin(account.user.login, account.user.password);
});


test.describe.serial('Descriptions testing',()=>{
  test('Descriptions testing 1) Check visibility of blocks', async ({page}) => { 

    test.slow();
    await test.step('Navigation to Property --> Descriptions',async () => {
    await mainPage.clickElement(property.propertyTab);
    await mainPage.clickElement(property.descriptionTab);       
    })

    await test.step('Checking the visibility of blocks',async () => {
    await mainPage.waitSomeTime(10000);
    await mainPage.checkVisibility(property.descBlock1);      
    await mainPage.checkVisibility(property.descBlock2);
    await mainPage.checkVisibility(property.descBlock3);
    await mainPage.checkVisibility(property.descBlock4);
    await mainPage.checkVisibility(property.descBlock5);
    await mainPage.checkVisibility(property.descBlock6);     
    })     

  });

  test('Descriptions testing 2) Check editing of blocks', async ({page}) => { 
    test.slow();
    await test.step('Navigation to Property --> Descriptions',async () => {
    await mainPage.clickElement(property.propertyTab);
    await mainPage.clickElement(property.descriptionTab); 
    })

    await test.step('Checking availability of typing text inside',async () => {
    await mainPage.waitSomeTime(10000);
    await mainPage.clickElement(property.openDescBlock1);
    await mainPage.checkVisibility(property.descBlockBody);
    await mainPage.clickElement(property.descBlockEdit);
    await mainPage.inputText(property.descBlockEdit,testText);
    })

  })
})

test.describe.serial('Property testing',()=>{

    test('Contact Person testing', async ({page}) => { 
    test.slow();
    await test.step('Navigation to Property --> Contact Persons',async () => {
    await mainPage.clickElement(property.propertyTab);
    await mainPage.clickElement(property.contactPersonTab);
    })

    await test.step('Adding new Contact Person',async () => {
    await mainPage.clickElement(property.newContactBtn);
    await mainPage.checkVisibility(property.contactModal);
    await mainPage.inputText(property.position,"Manager");
    await mainPage.inputText(property.surname,"test");
    await mainPage.inputText(property.firstName,"Test");
    await mainPage.inputText(property.email,"test@gmail.com");
    await mainPage.inputText(property.phone,"1234567890");  
    await mainPage.clickElement(property.saveBtn);
    await mainPage.waitSomeTime(5000);
    await mainPage.checkVisibility(property.contactValidation);
    })

    await test.step('Checking editing and deleting created Contact Person after testing',async () => {
    await mainPage.clickElement(property.svgEdit);
    await mainPage.checkVisibility(property.contactModal);
    await mainPage.clickElement(property.updateBtn);
    await mainPage.clickElement(property.svgDelete);
    await mainPage.checkNoVisibility(property.contactValidation);
    })

})
})
})