import { Page,expect } from "@playwright/test";


export default class Management {
  
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

public managementBtn:               string="//span[contains(text(),'Management')]";
public managementProp:              string="//span[contains(text(),'Properties')]";
public managementUsersNroles:       string="//span[contains(text(),'Users & Roles')]"

public addNewPropBtn:               string="(//button[contains(text(),' Add new property ')])[1]";
public modal:                       string="(//div[@class='modal-body'])[2]";
public propertyOrHotelName:         string="//input[@name='property-name']";
public streetNo:                    string="//input[@name='street']";
public phoneNo:                     string="//input[@name='tel']";
public postal:                      string="//input[@name='zip']";
public city:                        string="//input[@name='city']";
public country:                     string="(//span[@class='ss-disabled'])[1]";
public testCountry:                 string="(//div[@class='ss-list']/div[@class='ss-option'])[1]"; 
public currency:                    string="(//span[@class='ss-disabled'])[1]";
public testCurrency:                string="(//div[@class='ss-list']/div[@class='ss-option'])[last()]"; 
public email:                       string="//input[@name='email']";
public searchField:                 string="//input[@placeholder='Search by name/ID']";
public searchResult:                string="(//table/tbody)[1]";
public saveBtn:                     string="//button[@id='Save']";

public resendInvitation:            string="(//u[contains(text(),'Resend invitation')])[1]";
public inviteUser:                  string="//button[@id='InviteUser']";
public addUser:                     string="//button[@id='AddNewUser']";
public addUserMail:                 string="//input[@id='user-email']";
public addUserRole:                 string="//div[@id='user-roles']";
public supplierRole:                string="(//label[@class='checkbox-label'])[last()]";
public expectedLabel:               string="//td[contains(text(),'automated-testing.03@cultuzz.com')]";
public deleteUser:                  string="(//button[@type='button'])[last()-1]";
public adduserSave:                 string="//div[@id='addUser']//button[@id='Save']";
public confirmDelete:               string="//button[contains(text(),'Yes')]";
public deletedAlert:                string="//div[contains(text(),'User deleted successfully.')]";

public editBtn:                     string="//span[@id='target-u-29']//*[@width='17']";
async generateRandomPropName(){
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
}

async waitForUsersRoles(){
  let i=0;
  while(!await this.page.locator(this.addUser).isVisible()){
    await this.page.waitForTimeout(1000);
    i++;
    if(i%40===0){
      await this.page.reload();
    }
    if(i===125){
      console.log("Page was not loaded");
      break;
    }
  }
}
}