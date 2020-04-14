import { Component } from "@angular/core";
import { Section, Item } from "./custom-field-write.component";
import { HTTP_PREFIX} from "progress-sitefinity-adminapp-sdk/app/api/v1";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: "./dialog.component.html",
    styleUrls: []
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
            item.contentItem = {};
            section.items.push(item);
        }
    }

    getOptions(){
        const routeParams = this.route.snapshot.queryParams;
        const url = `${HTTP_PREFIX}/sf/system/productitems` + (routeParams.provider ? `?sf_provider=${routeParams.provider}` : ``);

        this.http.get<any[]>(url,{responseType: 'json'})
            .subscribe(result => this.options = result["value"]);
    }
}