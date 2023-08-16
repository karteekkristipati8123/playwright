
class LoginPage{

    constructor(page){
        this.page=page;
        this.loginlink="#login2";
        this.usernameinput="#loginusername";
        this.passwordinput="#loginpassword";
        this.loginbutton= '//button[normalize-space()="Log in"]';

    }

    async gotoLoginpage(){
        await this.page('https://www.demoblaze.com/index.html');
    }

    async loginp(username,password) {
        await this.page.locator(this.loginlink).click();
        await this.page.locator(this.usernameinput).fill(username);
        await this.page.locator(this.passwordinput).fill(password);
        await this.page.locator(this.loginbutton).click();

    }
}

export default LoginPage