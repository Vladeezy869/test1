import { Page,expect} from "@playwright/test";

export default class Products {
    private page: Page;
    constructor(page: Page) {
    this.page = page;
    }
    public RoomTypes:                         string="//span[contains(text(),'Room types')]";
    public searchField:                       string="//input[@placeholder='Search by name/ID']";
    public addNewRoom:                        string="(//button[@type='submit'][contains(text(),'Add new room')])[1]";
    public newRoomModal:                      string="(//div[@class='modal-body'])[1]";
    public R1result:                          string="(//p[contains(text(),'testRoom999')])[1]";

    public nameOfRoom:                        string="//input[@name='lang-en']";
    public descriptionOfRoom:                 string="(//div[@data-placeholder='Description'])[1]";
    public roomType:                          string="//div[@id='dd-typecodes']";
    public roomTypeApp:                       string="//span[contains(text(),'Apartment')]";
    public numberOfRooms:                     string="//input[@id='amount']";
    public initialPrice:                      string="(//input[@inputmode='decimal'])[2]";
    public guestsCount:                       string="//input[@id='occ-std']";
    public notStandartAmount:                 string="//h6[contains(text(),'Is it possible to have less or more persons than t')]";
    public minOcc:                            string="//input[@id='occ-min']";
    public maxOcc:                            string="//input[@id='occ-max']";
    public validityPeriod:                    string="//button[contains(text(),'Add validity period')]";
    public unlimitedValidity:                 string="(//label[@class='radio-label'])[2]";
    public blockoutPeriod:                    string="//h6[contains(text(),'Blockout periods')]";
    public addBlockoutPeriod:                 string="//button[contains(text(),'Add blockout period')]";
    public deleteBlockoutPeriod:              string="//div[@class='col-12 cell-block-delete']//button[@type='button']";
    public saveBtn:                           string="//button[contains(text(),'Save')]";
    public expectedCreatedRoom:               string="(//p[contains(text(),'testRoom999')])[1]";

    async navigation(){
        await this.page.click("//span[contains(text(),'Inventory')]");await this.page.waitForTimeout(1500);
        await this.page.click(this.RoomTypes);await this.page.waitForTimeout(1500);
    }

    async searchTest(){
        await this.page.click(this.searchField);await this.page.waitForTimeout(1500);
        await this.page.fill(this.searchField,'testRoom999');await this.page.waitForTimeout(1500);
        await expect(this.page.locator(this.R1result)).toBeVisible();await this.page.waitForTimeout(1500);
        await this.page.fill(this.searchField,'');
    }

    async addingNewRoom(){
        await this.page.click(this.addNewRoom);await this.page.waitForTimeout(1500);
        await expect(this.page.locator(this.newRoomModal)).toBeVisible();await this.page.waitForTimeout(1500);

        await this.page.click(this.nameOfRoom);await this.page.waitForTimeout(1500);
        await this.page.fill(this.nameOfRoom,'testRoom999');await this.page.waitForTimeout(1500);

        await this.page.click(this.descriptionOfRoom);await this.page.waitForTimeout(1500);
        await this.page.fill(this.descriptionOfRoom,'this is test description!!!!!!!!!!!!!!!');await this.page.waitForTimeout(1500);

        await this.page.click(this.roomType);await this.page.waitForTimeout(1500);
        await this.page.click(this.roomTypeApp);await this.page.waitForTimeout(1500);
        await this.page.click(this.roomType);await this.page.waitForTimeout(1500);

        await this.page.click(this.numberOfRooms);await this.page.waitForTimeout(1500);
        await this.page.fill(this.numberOfRooms,'1');await this.page.waitForTimeout(1500);

        await this.page.click(this.initialPrice);await this.page.waitForTimeout(1500);
        await this.page.fill(this.initialPrice,'');await this.page.waitForTimeout(1500);
        await this.page.fill(this.initialPrice,'100');await this.page.waitForTimeout(1500);

        await this.page.click(this.notStandartAmount);await this.page.waitForTimeout(1500);
        await this.page.fill(this.minOcc,'2');await this.page.waitForTimeout(1500);
        await this.page.fill(this.maxOcc,'3');await this.page.waitForTimeout(1500);

        await this.page.click(this.validityPeriod);await this.page.waitForTimeout(1500);
        await this.page.click(this.unlimitedValidity);await this.page.waitForTimeout(1500);

        await this.page.click(this.saveBtn);await this.page.waitForTimeout(30000);

        await expect(this.page.locator(this.expectedCreatedRoom)).toBeVisible();
    }

    async editRoom(){
        await this.page.click("((//td[@class='actions'])[last()]/button)[1]");await this.page.waitForTimeout(1500);
        await expect(this.page.locator(this.newRoomModal)).toBeVisible();
        await this.page.click(this.saveBtn);await this.page.waitForTimeout(1500);
    }

    async deleteRoom(){
        await this.page.click("((//td[@class='actions'])[last()]/button)[3]");await this.page.waitForTimeout(1500);
        //await expect(this.page.locator(this.expectedCreatedRoom)).not.toBeVisible();
    }

    //rate plans//
    async gotoRatePlans(){
        await this.page.click("//span[contains(text(),'Inventory')]");
        await this.page.click("//span[contains(text(),'Products (rate plans)')]");
    }

    async searchForRatePlan(){
        await this.page.click("//input[@placeholder='Search by name/ID']");
        await this.page.fill("//input[@placeholder='Search by name/ID']",'testRatePlan999');
        await expect(this.page.locator("(//span[contains(text(),'testRatePlan999')])[1]")).toBeVisible();
        await this.page.fill("//input[@placeholder='Search by name/ID']",'');
    }

    async addNewRatePlan(){
        await this.page.click("(//button[@type='submit'][contains(text(),'Add new rate plan')])[1]");
        await expect(this.page.locator("(//div[@class='modal-body'])[1]")).toBeVisible();
        await this.page.click("(//input[@autocomplete='new-password'])[1]");
        await this.page.fill("(//input[@autocomplete='new-password'])[1]",'testRatePlan999');
        await this.page.click("(//div[@data-placeholder='Description'])[1]");
        await this.page.fill("(//div[@data-placeholder='Description'])[1]",'testRatePlanDescription999');
        await this.page.click("//div[@id='dd-rooms']");
        await this.page.click("(//li/span)[1]");
        await this.page.click("//h4[contains(text(),'Settings')]");
        await this.page.click("//input[@id='minlos']");
        await this.page.fill("//input[@id='minlos']",'2');
        await this.page.click("//input[@id='maxlos']");
        await this.page.fill("//input[@id='maxlos']",'998');
        await this.page.click("//div[@id='dd-meals']");
        await this.page.click("(//div[@id='dd-meals']/ul/li)[last()]");
        await this.page.click("//div[@id='dd-cancels']");
        await this.page.click("(//div[@id='dd-cancels']/ul/li)[last()]/div/label");
        await this.page.click("//div[@id='dd-cancels']");
        await this.page.click("//div[@id='dd-bgarants']");
        await this.page.click("//span[contains(text(),'Credit Card')]");
        await this.page.click("//div[@id='dd-policies']");
        await this.page.click("//span[contains(text(),'payment')]");
        await this.page.click("(//label[@class='radio-label'])[2]");
        await this.page.click("(//label[@class='radio-label'])[1]");
        await this.page.click("//h4[contains(text(),'Price section')]");
        await this.page.click("//button[contains(text(),'Add validity period')]");
        await this.page.click("(//label[@class='radio-label'])[11]");
        await this.page.click("//button[contains(text(),'Save')]");
    }

    async deleteRatePlan(){
        await this.page.waitForTimeout(1500);
        await this.page.click("(((//tbody)[last()]/tr/td)[last()]/button)[3]");
        await this.page.waitForTimeout(2500);
    }



}