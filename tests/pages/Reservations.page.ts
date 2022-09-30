import { Page } from "@playwright/test";


export default class Reservations {
    private page: Page;

    constructor(page: Page) {
      this.page = page;
    }

    public reservationsTab:     string = "//span[contains(text(),'Reservations')]";
  
    public searchForBtn:        string = "//div[@id='search-for']";
    public fromBtn:             string = "//div[@id='date-from']";
    public untilBtn:            string = "//div[@id='date-until']";
    public showBtn:             string = "//button[contains(text(),'Show')]";
    public filtersBtn:          string = "//button[contains(text(),'Filters')]";
    public dataTable:           string = "//div[@class='list d-none d-md-block']";

    public firstCheckMail:      string = "(//p[@class='guests text-nowrap cursor-pointer'])[1]";
    public mailModal:           string = "//div[@class='content']";
    public sendNewMailBtn:      string = "//button[contains(text(),'Send New Email')]";
    public clientCloseBtn:      string = "//*[@class='close-btn']";

    public firstCheckPerson:    string = "(//td[@class='first']//p//span[@class='person'])[1]";
    public personModal:         string = "(//div[@class='modal-content'])[2]";
    public closePersonModal:    string = "//button[contains(text(),'Close')]";

    public firstCheckProduct:   string = "(//span[contains(text(),'View Details')])[1]";
    public productModal:        string = "(//div[@class='modal-content'])[4]";


}