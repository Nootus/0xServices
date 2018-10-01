import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { JobService } from "./JobService";
import { JobPostDomainDataModel } from "./models/JobPostDomainDataModel";

@Component({
    selector: "job-post",
    templateUrl: "./JobPostComponent.html",
    styleUrls: ["./JobPostComponent.css"]
})
export class JobPostComponent implements OnInit, OnDestroy {
    
    jobPostForm: FormGroup;
    domainData: JobPostDomainDataModel;
    private unsubscribe: Subject<void> = new Subject();

    constructor(private fb: FormBuilder, private route: ActivatedRoute,
        private jobService: JobService) {
        this.jobPostForm = fb.group({
            title: ["First Job", [Validators.required, Validators.maxLength(100)]],
            description: ["Very long description", [Validators.required, Validators.maxLength(1000)]],
            contractCategoryId: [1, [Validators.required]],
            budgetAmount: ["100", [Validators.required, Validators.pattern('\d+')]],
        });
    }

    ngOnInit() {
        this.route.data
            .pipe(takeUntil(this.unsubscribe))
            .subscribe((data: {domainData: JobPostDomainDataModel}) => {
                this.domainData = data.domainData;
            })
    }

    submitForm(): void {
        this.jobService.postJob(this.jobPostForm.value)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe();
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
