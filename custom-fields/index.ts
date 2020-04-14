import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CustomInputWriteComponent } from "./custom-field-write.component";
import { CUSTOM_FIELDS_PROVIDER } from "./custom-fields-provider";
import { FrameworkModule } from "progress-sitefinity-adminapp-sdk/app/api/v1";
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';

/**
 * The custom fields module.
 */
@NgModule({
    declarations: [
        CustomInputWriteComponent,
        DialogComponent
    ],
    entryComponents: [
        // The components need to be registered here as they are instantiated dynamically.
        CustomInputWriteComponent,
        DialogComponent
    ],
    providers: [
        CUSTOM_FIELDS_PROVIDER
    ],

    // import the framework module as it holds the components that the AdminApp uses
    // for a list of components see
    imports: [FormsModule, FrameworkModule, CommonModule]
})
export class CustomFieldsModule { }
