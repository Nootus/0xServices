import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { JobPostModel } from "./models/JobPostModel";
import { JobPostDomainDataModel } from "./models/JobPostDomainDataModel";

@Injectable()
export class JobService {

    constructor(private http: HttpClient) {
    }
    
    public jobDomainData(): Observable<JobPostDomainDataModel> {
        return this.http.get<JobPostDomainDataModel>("/api/job/jobdomaindata")
    }

    public postJob(model: JobPostModel): Observable<void> {
        return this.http.post<void>("/api/job/postjob", model);
    }
}