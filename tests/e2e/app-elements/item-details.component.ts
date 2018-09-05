require("jasmine-expect");
import { ItemDetailsMap } from "./item-details.map";
import { BrowserWaitForElement, BrowserVerifyAlert } from "../helpers/browser-helpers";
import { EditorPopupMap } from "./editor-popup.map";

export class ItemDetails {

    static async VerifyHtmlToolbarWordCount(): Promise<void> {
        const wordCountButtonClass = "k-i-Words-count";
        await BrowserWaitForElement(ItemDetailsMap.ToolbarButton(wordCountButtonClass));
        const toolbarButton = ItemDetailsMap.ToolbarButton(wordCountButtonClass);
        await toolbarButton.click();
        await BrowserVerifyAlert("Words count: 1115");
    }

    static async ClickHtmlToolbarSitefinityVideos(): Promise<void> {
        const wordCountButtonClass = "k-i-Sitefinity-videos";
        await BrowserWaitForElement(ItemDetailsMap.ToolbarButton(wordCountButtonClass));
        const toolbarButton = ItemDetailsMap.ToolbarButton(wordCountButtonClass);
        await toolbarButton.click();
    }

    static async ClickOnHtmlField(): Promise<void>  {
        await BrowserWaitForElement(ItemDetailsMap.HtmlField);
        const htmlField = ItemDetailsMap.HtmlField;
        await htmlField.click();
    }

    static async VerifyCustomTitleField(): Promise<void> {
        await BrowserWaitForElement(ItemDetailsMap.TitleField);
        expect(await ItemDetailsMap.ExtendedTitleField.isPresent()).toBeTruthy("The title field extension class was not found");
    }

    static async VerifyAndClickSymbolListButton(): Promise<void> {
        const symbolListButtonClass = "k-i-insertsymbol";
        await BrowserWaitForElement(ItemDetailsMap.ToolbarButton(symbolListButtonClass));
        const toolbarButton = ItemDetailsMap.ToolbarButton(symbolListButtonClass);
        await toolbarButton.click();
        await BrowserWaitForElement(EditorPopupMap.ToolPopup);
        const symbolButton = EditorPopupMap.SymbolCell;
        await symbolButton.click();
    }
}