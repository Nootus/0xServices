import { Component, OnDestroy } from "@angular/core";
import { LoaderService } from "./LoaderService";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
    selector: "fab-loader",
    templateUrl: "./LoaderComponent.html",
    styleUrls: ["./LoaderComponent.css"],
})
export class LoaderComponent implements OnDestroy {
    public loading: boolean = false;

    private unsubscribe: Subject<void> = new Subject();

    constructor(public service: LoaderService) { 
        this.service.loader
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(state => {
                this.loading = state
                // alert('changed');
            });
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}