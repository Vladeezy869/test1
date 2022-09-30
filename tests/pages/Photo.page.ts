import { Page} from "@playwright/test";

export default class Photo {
    private page: Page;
    constructor(page: Page) {
    this.page = page;
    }

    public propertyTab:              string = "(//span[contains(text(),'Property')])[1]";
    public photosTab:                string = "//a[@href='/photos']";
    public browseFiles:              string = "(//button[contains(text(),'Browse files')])[1]";
    public uploadedPhoto:            string = "(//div[@class='gallery-item']/div)[1]";
    public mediaLibrary:             string = "//button[contains(text(),'Media library')]";
    public uploadedPhotoFromLibrary: string = "(//div[@class='media-item'])[1]";
    public deletePhoto:              string = "//button[@type='button']//*[@class='room-delete']";
    public closeMediaLibrary:        string = "//*[@class='d-none d-md-block']";
    public nameOfUploadedPhoto:      string = "(//input[@class='room-name'])[1]";
    

    async uploadLogo(){
        const [fileChooser] = await Promise.all([
            this.page.waitForEvent('filechooser'),
            this.page.click(this.browseFiles),
          ]);
          await fileChooser.setFiles('testFiles/hotelTest.jpg');
    }
}