import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { JobService } from "./JobService";
import { JobPostModel } from "./models/JobPostModel";

@Component({
    selector: "job-post",
    templateUrl: "./JobPostComponent.html",
    styleUrls: ["./JobPostComponent.css"]
})
export class JobPostComponent implements OnInit {
    
    ngOnInit(): void {
        //alert('start');
        //    throw new Error("Method not implemented.");
    }

    jobPostForm: FormGroup;

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
        this.jobService.postJob(this.jobPostForm.value).subscribe();
    }
}
