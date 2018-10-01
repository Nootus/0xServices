import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable }             from 'rxjs';

import { JobPostDomainDataModel } from './models/JobPostDomainDataModel';
import { JobService } from './JobService';
 
 
@Injectable()
export class JobPostResolver implements Resolve<JobPostDomainDataModel> {
  constructor(private service: JobService, private router: Router) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<JobPostDomainDataModel> {
     return this.service.jobDomainData();
  }
}