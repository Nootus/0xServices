import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "job-post",
    templateUrl: "./JobPostComponent.html",
    styleUrls: ["./JobPostComponent.css"]
})
export class JobPostComponent {
    jobPostForm: FormGroup;

    submitForm(): void {

    }
}
