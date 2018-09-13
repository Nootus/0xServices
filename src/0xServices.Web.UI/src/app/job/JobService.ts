import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { JobPostModel } from "./models/JobPostModel";

@Injectable()
export class JobService {

    constructor(private http: HttpClient) {
    }
    
    public postJob(model: JobPostModel): Observable<void> {
        return this.http.post<void>("/api/job/postjob", model);
    }

}