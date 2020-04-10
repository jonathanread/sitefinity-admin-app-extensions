import { SettingsBase } from "progress-sitefinity-adminapp-sdk/app/api/v1";
import { ValidatorFn } from "@angular/forms";

/**
 * A settings object to configure the fields behavior. This object is assigned to the field via the settings property on the FieldBase class.
 * Examples of such are validations, the title to be shown and so on.
 */
export class CustomShortTextSettings extends SettingsBase {
    init(metadata: any) {
        super.init(metadata);
    }
    getValidators(): ValidatorFn[] {
        const baseValidators = super.getValidators();
        return baseValidators;
    }
}
