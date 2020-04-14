import { Component, Inject } from "@angular/core";
import { FieldBase, SELECTOR_SERVICE, SelectorService} from "progress-sitefinity-adminapp-sdk/app/api/v1";
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
    constructor(@Inject(SELECTOR_SERVICE) private readonly selectorService: SelectorService) {
        super();
    }
    public sections:Section[];
    get currentValue(): Section[]{
        if(this.sections && this.sections.length > -1){
            return this.sections;
        }else if(this.getValue() && !this.sections){
            this.sections = JSON.parse(this.getValue());
            return this.sections;
        }else if(!this.sections){
            this.sections = [];
        }
        else{
            return this.sections;
        }
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

        this.writeValue(JSON.stringify(this.currentValue));
    }

    addSection(){
        const section:Section = new Section();
        
        this.currentValue.push(section);
        this.openDialog(section);
    }

    openDialog(section: Section) {
        const dialogData: DialogData = {
            componentData: {
                type: DialogComponent,
                properties: {
                    sections: this.currentValue,
                    section: section
                }
            },
            commands: []
        };

        this.selectorService.openDialog(dialogData).subscribe(item =>{this.writeValue(JSON.stringify(item.component.sections));});
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
