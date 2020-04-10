import { Component } from "@angular/core";
import { FieldBase } from "progress-sitefinity-adminapp-sdk/app/api/v1";
import { HttpClient } from '@angular/common/http';
import { HTTP_PREFIX } from "progress-sitefinity-adminapp-sdk/app/api/v1";
import { ActivatedRoute } from "@angular/router";


/**
 * The component used to display the field in write mode.
 * One can use inline template & styles OR templateUrl & styleUrls, like here OR mixture of that. See -readonly.component.ts version for the read mode type.
 */
@Component({
    templateUrl: "./custom-field-write.component.html",
    styleUrls: []
})
export class CustomInputWriteComponent extends FieldBase{
    public options:any[];

    syncValue(value: string) {
        this.writeValue(value);
    }
    
    getOptions(){
        const routeParams = this.route.snapshot.queryParams;
        const url = `${HTTP_PREFIX}/sf/system/newsitems` + (routeParams.provider ? `?sf_provider=${routeParams.provider}` : ``);

        this.http.get<any[]>(url,{responseType: 'json'})
            .subscribe(result => this.options = result["value"]);
    }

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute
      ) {
        super();
        this.getOptions();
    }
}
