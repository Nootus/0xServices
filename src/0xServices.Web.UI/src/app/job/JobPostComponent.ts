import { Component, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { JobService } from "./JobService";

@Component({
    selector: "job-post",
    templateUrl: "./JobPostComponent.html",
    styleUrls: ["./JobPostComponent.css"]
})
export class JobPostComponent implements OnDestroy {
    
    jobPostForm: FormGroup;
    private unsubscribe: Subject<void> = new Subject();

    constructor(private fb: FormBuilder,
        private jobService: JobService) {
        this.jobPostForm = fb.group({
            title: ["First Job", [Validators.required, Validators.maxLength(100)]],
            description: ["Very long description", [Validators.required, Validators.maxLength(1000)]],
            contractCategoryId: [1, [Validators.required]],
            budgetAmount: ["100", [Validators.required, Validators.pattern('\d+')]],
        });
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
