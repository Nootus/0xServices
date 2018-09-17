import { Component, OnDestroy } from "@angular/core";
import { LoaderService } from "./LoaderService";
import { Subscription } from "rxjs";

@Component({
    selector: "fab-loader",
    templateUrl: "./LoaderComponent.html",
    styleUrls: ["./LoaderComponent.css"],
})
export class LoaderComponent implements OnDestroy {
    public loading: boolean = false;

    private loadEvent: Subscription;

    constructor(public service: LoaderService) { 
        this.loadEvent = this.service.loader.subscribe(state => {
            this.loading = state
            // alert('changed');
        });
    }

    ngOnDestroy(): void {
        this.loadEvent.unsubscribe();
    }
}