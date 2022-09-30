import { Page,expect,BrowserContext } from "@playwright/test";
import axios from "axios";
import * as env from "../../env/account.json";
//import * as data from "../../testFiles/data.json";
export default class CreateAuser {
    private page: Page;

    constructor(page: Page) {
      this.page = page;
    }
    
    public password:                 string = '1!2@3#asdF#';
    public emailField:               string = "//input[@name='email']";
    public requiredCheckbox:         string = "//label[@class='checkbox-label']";
    public passwordField:            string = "//input[@name='password']";
    public submitBtn:                string = "//button[@type='submit']";
    public emailValue:               string = "//div/h3";

    //mailsac
    public mailsacSignIn:            string = "//a[contains(text(),'Sign in')]";
    public mailsacEmail:             string = "//input[@ng-model='loginDetails._id']";
    public mailsacPass:              string = "//input[@type='password']";
    public mailsacSignBtn:           string = "//button[contains(text(),'Sign In')]";
    public mailField:                string = "//input[@ng-model='myinbox']";
    public checkTheMail:             string = "//button[@class='btn btn-primary btn-block']";
    public emailItself:              string = "//td[@class='col-xs-5 ng-binding']";
    public unlockLinks:              string = "//a[@class='btn btn-info btn-xs']";
    public expectedText:             string = "//p[contains(text(),'Welcome to CultBooking,')]";

    public enterDetailsBtn:          string = "//a[contains(text(),'Enter your details')]";

    async navigateToRegistrationPage(){
        await this.page.goto('https://dev.admin.roomdb.io/register');
    }

    async generateRandomNames(){
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    }

    async generateMail(): Promise<string>{
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10) + '@mailsac.com';
    }

    async enterEmail(mail:string){
        await this.page.locator(this.emailField).fill(`${mail}`);await this.page.waitForTimeout(1000);
    }

    async enterPassword(){
        await this.page.locator(this.passwordField).fill(this.password);await this.page.waitForTimeout(1000);
    }

    async waitForSuccessMessage(){
        await this.page.waitForTimeout(10000);
        await expect(this.page.locator("//h1[contains(text(),'Please check your email')]")).toBeVisible();
    }

    async getTempMail(){
        return await this.page.locator(this.emailValue).innerText();
    }

    async navigateToMailsac(){
        await this.page.goto('https://mailsac.com');
    }

    async logInToMailsac(){
        await this.page.locator(this.mailsacEmail).fill(this.password);await this.page.waitForTimeout(1000);
        await this.page.locator(this.mailsacSignBtn).click();
    }

    async enterMailsacCredentials(){
        await this.page.locator(this.mailsacSignIn).click();
        await this.page.locator(this.mailsacEmail).fill(env.mailsac.login);await this.page.waitForTimeout(1000);
        await this.page.locator(this.mailsacPass).fill(env.mailsac.password);await this.page.waitForTimeout(1000);
        await this.page.locator(this.mailsacSignBtn).click();
    }

    async enterMail(mail:string) {
        await this.page.waitForTimeout(15000);
        await this.page.locator(this.mailField).fill(`${mail}`);
        await this.page.locator(this.checkTheMail).click();
    }

    async checkEmail() {
        await this.page.locator(this.emailItself).click();
        const elementHandle = await this.page.$(this.unlockLinks);
        await elementHandle?.evaluate(node => node.removeAttribute('target'));
        await this.page.locator(this.unlockLinks).click();
        await expect(this.page.locator(this.expectedText)).toBeVisible();
        const elementHandle2 = await this.page.$(this.enterDetailsBtn);
        await elementHandle2?.evaluate(node => node.removeAttribute('target'));
        await this.page.locator(this.enterDetailsBtn).click();
    }

    async enterDetailsAndProceed(){
        await this.page.locator("//input[@name='first_name']").fill(await this.generateRandomNames());await this.page.waitForTimeout(1000);
        await this.page.locator("//input[@name='last_name']").fill(await this.generateRandomNames());await this.page.waitForTimeout(1000);
        await this.page.locator("//input[@type='tel']").fill('+4932312322134');await this.page.waitForTimeout(1000);
        await this.page.locator("//button[@type='submit']").click();await this.page.waitForTimeout(1000);
        await this.page.locator("(//label[@class='radio-label'])[1]").click();await this.page.waitForTimeout(1000);
        await this.page.locator("//button[@type='submit']").click();await this.page.waitForTimeout(1000);
    }

    async navigateToLogInPageAndLogIn(email){
        await this.page.goto('https://dev.admin.roomdb.io/login');
    }

    public testToken:                 string="k_SFEakxgcoVl7cVobOIyOUZ6jj2IDzA7aa8";
    async getMailsacMsgIdByIndex(email: string, index: number) {
        return await axios({
            method: 'get',
            headers: { Host: 'mailsac.com', 'Mailsac-Key': this.testToken },
            url: `addresses/${email}/messages`,
            baseURL: 'https://mailsac.com/api/',
        })
            .then((response) => response.data[index].links)
      }
      async getMailsacMsgTxt(email: string, messageId: string) {
        return await axios({
            method: 'get',
            headers: { Host: 'mailsac.com', 'Mailsac-Key': this.testToken },
            url: `text/${email}/${messageId}`,
            baseURL: 'https://mailsac.com/api/',
        })
            .then((response) => response.data)
      }
    
}