import { Page} from "@playwright/test";

export default class Property {
    private page: Page;
    constructor(page: Page) {
    this.page = page;
    }
    //Property tab//
    public propertyName:          string = "CultBooking DEMO";
    public propertyElement:       string = "(//div[@class='bv-no-focus-ring'])[1]/input";
    public propertyType:          string = "//div[@id='type']";
    public propertyTypeDropDown:  string = "(//input[@id='search-filter'])[1]";
    public propertyTypeDropDown2: string = "(//input[@id='search-filter'])[2]";
    public propertyCapacity:      string = "//input[@name='capacity']";
    public propertyRadioRooms:    string = "(//label[@class='radio-label'])[1]";
    public propertyRadioBeds:     string = "(//label[@class='radio-label'])[2]";
    public telephoneNumber:       string = "(//div[@class='bv-no-focus-ring'])[3]/input";
    public propertyPrimaryEmail:  string = "(//div[@class='bv-no-focus-ring'])[4]/input";
    public propertyWebsite:       string = "(//div[@class='bv-no-focus-ring'])[5]/input";
    public propertyCurrency:      string = "//div[@id='currency']";

    public propertyTab:           string = "(//span[contains(text(),'Property')])[1]";
    public saveBtn:               string = "//button[contains(text(),'Save')]";

    public masterDataTab:         string = "//span[contains(text(),'Master Data')]";
    public property:              string = "//div[@id='property']"; 
    public address:               string = "//div[@id='adress']";
    public IDs:                   string = "//div[@id='ids']";
    public propertyGroup:         string = "//div[@id='propertygroup']";

    public changeLogoImage:       string = "//span[contains(text(),'Change logo image')]";
    public deleteLogoImage:       string = "//span[contains(text(),'Delete')]";
    public addLogoImage:          string = "//span[contains(text(),'Add logo image')]";

    //Address tab
    public addressStreet:         string = "//div/input[@name='street_no']";
    public secondAddress:         string = "//div/input[@name='second_address']";
    public postalCode:            string = "//div/input[@name='post_code']";
    public city:                  string = "//div/input[@name='city']";
    public country:               string = "//div[@id='country']";
    public countryDropDown:       string = "(//input[@id='search-filter'])[3]";
    public stateDropDown:         string = "(//input[@id='search-filter'])[2]";
    public stateOrProvince:       string = "//div[@id='state']";
    public latitude:              string = "//div/input[@name='latitude']";
    public longitude:             string = "//div/input[@name='longitude']";
    public successMsg:            string = "//div[@class='toast-title']";
    public locationBtn:           string = "//a[@class='btn btn-primary btn-block']";

    //IDs tab
    public bookingCom:            string = "//div/input[@name='bkg']";
    public expedia:               string = "//div/input[@name='exp']";
    public HRS:                   string = "//div/input[@name='hrs']";
    public cultSwitch:            string = "//div/input[@name='cs']";
    public roomDB:                string = "//div/input[@name='rdb']";
    public eHotel:                string = "//div/input[@name='ehtl']";

    //Property group tab
    public changePropGroupDrDw:   string = "//div[@id='propertyGroup']";
    public changePropGroupSearch: string = "(//input[@id='search-filter'])[5]";

    ////////////////////
    //Descriptions tab//
    public descriptionTab:        string = "//a[@href='/descriptions']";
    public descBlock1:            string = "(//div[@class='panel position-relative panel-content'])[1]";
    public descBlock2:            string = "(//div[@class='panel position-relative panel-content'])[2]";
    public descBlock3:            string = "(//div[@class='panel position-relative panel-content'])[3]";
    public descBlock4:            string = "(//div[@class='panel position-relative panel-content'])[4]";
    public descBlock5:            string = "(//div[@class='panel position-relative panel-content'])[5]";
    public descBlock6:            string = "(//div[@class='panel position-relative panel-content'])[6]";

    public openDescBlock1:        string = "(//div[@class='list d-none d-md-block left-edge']/div[@class='cursor'])[1]";
    public descBlockBody:         string = "(//div[@class='ql-container ql-snow']/div[@class='ql-editor ql-blank'])[1]";
    public descBlockEdit:         string = "(//div[@class='ql-container ql-snow']/div[@class='ql-editor ql-blank'])[1]/p";
    
    //Contact Person tab//
    public contactPersonTab:      string = "//a[@href='/contact-persons']";
    public newContactBtn:         string = "(//button[@type='submit'][contains(text(),'New Contact Person')])[1]";
    public contactModal:          string = "(//div[@class='modal-content'])[1]";

    //add a new contact person modal
    public position:              string = "//input[@id='position']";
    public surname:               string = "//input[@id='surname']";
    public email:                 string = "//input[@id='mail']";
    public firstName:             string = "//input[@id='firstname']";
    public phone:                 string = "//input[@name='phone']";
    public contactValidation:     string = "//a[contains(text(),'Manager')]";
    public svgEdit:               string = "//*[@width='17']";
    public svgDelete:             string = "//button[@type='button']//*[@width='19']";
    public updateBtn:             string = "//button[contains(text(),'Update')]";
    




    async uploadLogo(){
        const [fileChooser] = await Promise.all([
            this.page.waitForEvent('filechooser'),
            this.page.click(this.addLogoImage),
          ]);
          await fileChooser.setFiles('testFiles/logo.jpg');
    }
}