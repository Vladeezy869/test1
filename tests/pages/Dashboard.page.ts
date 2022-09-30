import { Page } from "@playwright/test";


export default class Dashboard {
    private page: Page;

    constructor(page: Page) {
      this.page = page;
    }
    
    public language:           string = "(//div[@class='btn dropdown-toggle btn-link btn-sm lang-menu dropdown-toggle-no-caret'])[2]"; //using ID, element is not visible :(
    public languageDropDown:   string = "//ul[@class='dropdown-menu show']";
    public deutschLan:         string = "//ul[@class='dropdown-menu show']//li[@role='presentation']//a[@class='dropdown-item'][contains(text(),'Deutsch')]";
    public portuegLan:         string = "//ul[@class='dropdown-menu show']//li[@role='presentation']//a[@class='dropdown-item'][contains(text(),'Português')]";
    public turckeLan:          string = "//ul[@class='dropdown-menu show']//li[@role='presentation']//a[@class='dropdown-item'][contains(text(),'Türkçe')]";

    public deuCheckLan:        string = "//p[contains(text(),'Buchungen / Tag')]";
    public engCheckLan:        string = "//p[contains(text(),'Bookings / Day')]"
    public turCheckLan:        string = "//p[contains(text(),'Rezervasyonlar / Gün')]";
  //public porCheckLan:        string = ""

    public settingsBtn:        string = "//button[contains(text(),'Settings')]";
    public deactivateBtn1:     string = "(//div[@class='widget-status-group-header-activate']/span)[1]";
    public deactivateBtn2:     string = "(//div[@class='widget-status-group-header-activate']/span)[2]";
    public deactivateBtn3:     string = "(//div[@class='widget-status-group-header-activate']/span)[3]";
    public deactivateBtn4:     string = "(//div[@class='widget-status-group-header-activate']/span)[4]";
    public deactivateBtn5:     string = "(//div[@class='widget-status-group-header-activate']/span)[5]";
    public closeDeactivTab:    string = "//button[contains(text(),'×')]";

    public downloadPDF:        string = "//button[contains(text(),'Download PDF report')]";

    public firstBlockOfDashDivs:         string = "//div[@class='layout-kpi layout-full']//div[@class='vue-grid-layout']";
    public secondBlockOfDashDivs:        string = "//div[@class='layout-book layout-full']//div[@class='vue-grid-layout']";
    public thirdBlockOfDashDivs:         string = "//div[@class='layout-ibe layout-full']";
    public fourthBlockOfDashDivs:        string = "//div[@class='layout-channel layout-full']";
    public fifthBlockOfDashDivs:         string = "//div[@class='layout-term layout-full']";
    async changeVisibility1(){
      await this.page.click("//button[contains(text(),'Settings')]");
      await this.page.click("(//span[contains(text(),'activate all')])[1]");
      await this.page.click("//button[contains(text(),'×')]");
    }
    async changeVisibility2(){
      await this.page.click("//button[contains(text(),'Settings')]");
      await this.page.click("(//span[contains(text(),'activate all')])[2]");
      await this.page.click("//button[contains(text(),'×')]");
    }
    async changeVisibility3(){
      await this.page.click("//button[contains(text(),'Settings')]");
      await this.page.click("(//span[contains(text(),'activate all')])[3]");
      await this.page.click("//button[contains(text(),'×')]");
    }
    async changeVisibility4(){
      await this.page.click("//button[contains(text(),'Settings')]");
      await this.page.click("(//span[contains(text(),'activate all')])[4]");
      await this.page.click("//button[contains(text(),'×')]");
    }
    async changeVisibility5(){
      await this.page.click("//button[contains(text(),'Settings')]");
      await this.page.click("(//span[contains(text(),'activate all')])[5]");
      await this.page.click("//button[contains(text(),'×')]");
    }

}