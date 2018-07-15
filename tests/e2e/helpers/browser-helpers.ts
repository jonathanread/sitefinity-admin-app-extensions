import { browser, ElementFinder } from "protractor";
import { EC, TIME_TO_WAIT } from "./constants";

export async function BrowserWaitForElement(element: ElementFinder) {
    await browser.wait(EC.visibilityOf(element), TIME_TO_WAIT, "Element is not visible");
}

export async function BrowserGetUrl(): Promise<string> {
    return await browser.getCurrentUrl();
}

export async function BrowserNavigate(url: string): Promise<void> {
    return await browser.get(url);
}

export async function BrowserVerifyAlert(expectedAlertText: string): Promise<void> {
    await browser.wait(EC.alertIsPresent(), 5000, "Alert is not shown");
    var alertDialog = browser.switchTo().alert();
    var actualAlertText = await alertDialog.getText();
    expect(actualAlertText).toBe(expectedAlertText, "The expected alert was shown but the text was not expected");
    await alertDialog.accept();
}
