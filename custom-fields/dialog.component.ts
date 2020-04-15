import { Component } from "@angular/core";
import { Section, Item } from "./custom-field-write.component";
import { HTTP_PREFIX} from "progress-sitefinity-adminapp-sdk/app/api/v1";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: "./dialog.component.html",
    styleUrls: ["./dialog-component.css"]
})
export class DialogComponent {
    constructor( private http: HttpClient,
        private route: ActivatedRoute){
            this.getOptions();
        }

    public section: Section;
    public sections: Section[];
    options: any[];
   
    addItem(section:Section){
        if(section){
            const item: Item = new Item();
            item.contentItem = {Id:""};           
            section.items.push(item);
        }
    }

    syncValue(value:Item){
        if(value){
            const option: any = this.options.find(i => i.Id === value.contentItemId);
            if(option){
                value.contentItem = option;
            }
        }
    }

    removeItem(item:Item){
        if(item){
            const index: number = this.section.items.indexOf(item);
            if (index !== -1) {
                this.section.items.splice(index, 1);
            } 
        }
    }

    getOptions(){
        const routeParams = this.route.snapshot.queryParams;
        const url = `${HTTP_PREFIX}/sf/system/productitems` + (routeParams.provider ? `?sf_provider=${routeParams.provider}` : ``);

        this.http.get<any[]>(url,{responseType: 'json'})
            .subscribe(result => this.options = result["value"]);
    }
}