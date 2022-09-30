import { Page } from "@playwright/test";


export default class WhatsNearby {
    private page: Page;

    constructor(page: Page) {
      this.page = page;
    }
    
    public propertyTab:              string = "(//span[contains(text(),'Property')])[1]";
    public whatsNearbyTab:           string = 'a:has-text("What\'s nearby")';
    public addNewBtn:                string = "(//span[contains(text(),'Add new')])[1]";
    public transportation:           string = 'p:has-text("Transportation")';
    public airpodCode:               string = '[placeholder="Airport code"]';
    public distanceAirpod:           string = "(//input[@autocomplete='new-password'])[2]";
    public unitsAirpod:              string = "(//span[contains(text(),'Kilometer')])[1]";
    public unitsDrop:                string = "//ul[@class='drop-down-menu position-absolute from-left false grow-down']";

    public trainStCode:              string = '[placeholder="Train station code"]';
    public distanceTrain:            string = "(//input[@autocomplete='new-password'])[4]";
    public unitsTrain:               string = "//span[@xpath='1'][contains(text(),'Kilometer')]";

    public saveBtn:                  string = "//button[contains(text(),'Save')]";
    public greenAlert:               string = "//div[contains(text(),'nearby.alertSaved')]";

    public deleteBtn:                string = 'body > div.d-flex.main-container > div.content.logged-in > main > div.page-nearby > div > div:nth-child(2) > div > div > span > div:nth-child(1) > div:nth-child(2) > button > svg'                                                    //'(//*[local-name()="svg"])[66]/ancestor::button';
    public deleteBtn2:               string = '(//*[local-name()="svg"])[70]/ancestor::button';
    public revert:                   string = "//button[contains(text(),'Revert Changes')]";


    public profileIcon:              string = "(//div[@aria-haspopup='true'])[6]";
    public logOutBtn:                string = "(//span[contains(text(),'Log out')])[2]";

    async logOut(){
      await Promise.all([
        this.page.waitForNavigation(/*{ url: 'https://admin.roomdb.io/login' }*/),
        this.page.locator('[id="__BVID__110"] div:has-text("Log out")').click()
           ]);
    }

}