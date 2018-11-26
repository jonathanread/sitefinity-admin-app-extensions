import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CUSTOM_CLASSES_PROVIDER } from "./custom-classes/custom-classes-provider";

/**
 * The toolbar extender module.
 */
@NgModule({
    providers: [
        CUSTOM_CLASSES_PROVIDER
    ],
    imports: [
        CommonModule
    ]
})
export class EditorExtenderModule {
    /* empty */
}
