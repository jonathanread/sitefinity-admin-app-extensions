import { Component, Inject } from "@angular/core";
import { FieldBase, SELECTOR_SERVICE, SelectorService } from "progress-sitefinity-adminapp-sdk/app/api/v1";
import { DialogData } from "progress-sitefinity-adminapp-sdk/app/api/v1/selectors/dialog-data";
import { DialogComponent } from "./dialog.component";

/**
 * The component used to display the field in write mode.
 * One can use inline template & styles OR templateUrl & styleUrls, like here OR mixture of that. See -readonly.component.ts version for the read mode type.
 */
@Component({
    templateUrl: "./custom-field-write.component.html",
    styleUrls: ["./custom-field.css"]
})
export class CustomInputWriteComponent extends FieldBase{
    public sections:Section[];

    get currentValue(): Section[]{
        if(this.getValue()){
            return JSON.parse(this.getValue());
        }
        return [];
    }
    
    editSection(section: Section){
        if(!section){
            return null;
        }

        this.openDialog(section);
    }

    deleteSection(section: Section){
        if(!section){
            return null;
        }
        const index: number = this.sections.indexOf(section);
        if (index !== -1) {
            this.sections.splice(index, 1);
        } 

        this.writeValue(JSON.stringify(this.sections));
    }

    addSection(){
        const section:Section = new Section();
        this.sections.push(section)
        this.openDialog(section);
    }

    doSomething(){}

    openDialog(section: Section) {
        const dialogData: DialogData = {
            componentData: {
                type: DialogComponent,
                properties: {
                    section: section
                }
            },
            commands: []
        };

        this.selectorService.openDialog(dialogData);
    }

    constructor(
 @Inject(SELECTOR_SERVICE) private readonly selectorService: SelectorService
      ) {
        super();
        this.sections = this.currentValue;
    }
}

export class Section{
    constructor(){
        this.items = [];
    }
    id:number;
    heading: string;
    items: Item[];
}

export class Item{
    id:number;
    beforeText:string;
    afterText:string;
    contentItem: any;
}
