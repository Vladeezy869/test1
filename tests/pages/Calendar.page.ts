import { Page,expect } from "@playwright/test";


export default class Calendar {
  
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

public calendarTab:               string="//span[contains(text(),'Calendar')]";
public restrictionDiv:            string="//div[@class='custom-info']";
public roomsFilter:               string="(//div[@id='dd-rooms'])[1]";
public roomsFilterInner:          string="//ul[@class='drop-down-menu position-absolute from-left dd-multiple grow-down']";

public restrictions:              string="//div[@id='dd-restrictions']";
public restrictionsInner:         string="//ul[@class='drop-down-menu position-absolute from-left dd-multiple grow-down']";

public dateFrom:                  string="//div[@id='date-from']";
public dateUntill:                string="//div[@id='date-until']";
public setPeriod:                 string="//button[contains(text(),'Set Period')]";


async calendarLoading(){
    await this.page.click(this.calendarTab);
    let i=0;
    while(await this.page.locator('//img[@src="/assets/images/spinner.png"]').isVisible()){
      await this.page.waitForTimeout(1000);
      console.log('1');
      i++;
      if(i===180){
        break;
      }
    }
    //sync to prod 
}
}
