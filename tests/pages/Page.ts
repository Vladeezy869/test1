import { Page,expect } from "@playwright/test";
import { allure } from "allure-playwright";


export default class MainPage {
  
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

    async getElement(element:string){
        return element;
    }

    async clickElement(element:string){
      await this.page.locator(element).click();
      await this.waitSomeTime(1500);
    }

    async waitSomeTime(time:number){
      await this.page.waitForTimeout(time);
    }

    async getInnerText(element:string){
      return await this.page.locator(element).innerText();
    }

    async inputText(element:string,value:string){
      await this.page.locator(element).fill('');
      await this.page.locator(element).fill(value);
      await this.waitSomeTime(2000);
    }

    async clearInput(element:string){
      await this.page.locator(element).fill('');
      await this.waitSomeTime(2000);
    }

    async checkAvailability(element:string){
      await this.waitSomeTime(1000);
      await expect (this.page.locator(element)).toBeEditable();
      await this.waitSomeTime(2000);
    }

    async checkVisibility(element:string){
      await this.waitSomeTime(1000);
      await expect (this.page.locator(element)).toBeVisible();
      await this.waitSomeTime(2000);
    }

    async checkNoVisibility(element:string){
      await this.waitSomeTime(1000);
      await expect (this.page.locator(element)).not.toBeVisible();
      await this.waitSomeTime(2000);
    }

    async saveToJson(fs,filepath,data){
      fs.writeFile(filepath, JSON.stringify(data), err => {
        if (err) console.log("Error writing file:", err);
      });
  }

  async createJson(fs,filepath){
      fs.writeFile(filepath,'', function(err) {
          if(err) console.log('error', err);
      });
  }

  async deleteJson(fs,filepath){
      fs.unlink(filepath, function (err) {
          if (err) throw err;
      });
  }
  async logs(page){
    page.on("console", msg=>{
      
      if(msg.text()==="reCAPTCHA couldn't find user-provided function: vueRecaptchaApiLoaded"){

      }else
      if(msg.text()==="ZammadForm is absent"){

      }else
      if(msg.text()==="ZammadChat is absent"){
    
      }else{
      console.log(msg.text());
      allure.story(msg.text());
      }
  })
  }

}