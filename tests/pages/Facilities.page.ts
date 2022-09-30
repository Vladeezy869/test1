import { Page } from "@playwright/test";


export default class Facilities {
    private page: Page;

    constructor(page: Page) {
      this.page = page;
    }

    public propertyTab:                 string = "(//span[contains(text(),'Property')])[1]";
    public facilitiesTab:               string = "//span[contains(text(),'Facilities')]";
    public facilitiesDiv:               string = "//div[@class='facilities-area']";
    public saveBtn:                     string = "(//button[@type='submit'])[1]";


    async clickAllCheckboxes(){
        for(let i = 1; i < 18; i++){
            await this.page.locator(`(//label[@class='checkbox-label'])[${i}]`).click();
            await this.page.waitForTimeout(1500);
        }
    }

}
