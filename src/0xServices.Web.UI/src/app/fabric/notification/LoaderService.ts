import { Injectable, OnDestroy } from "@angular/core";
import {
    Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router
  } from '@angular/router';
  import { BehaviorSubject, Subject } from 'rxjs';
  import { takeUntil } from 'rxjs/operators';
  
  
@Injectable()
export class LoaderService implements OnDestroy {
    public loader: BehaviorSubject<boolean>;
    
    private unsubscribe: Subject<void> = new Subject();
    private queue: Array<number> = [];

    constructor(router: Router) {
        this.loader = new BehaviorSubject<boolean>(false);

        router.events
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((event: Event) => {
          switch (true) {
            case event instanceof NavigationStart: {
              this.showLoader();
              break;
            }
    
            case event instanceof NavigationEnd:
            case event instanceof NavigationCancel:
            case event instanceof NavigationError: {
              this.hideLoader();
              break;
            }
            default: {
              break;
            }
          }
        });
    }

    public showLoader(): void {
        this.queue.push(0);
        if(this.queue.length === 1) {
          // alert('loading');
          this.loader.next(true);
        }
    }

    public hideLoader(): void {
        this.queue.pop();
        if(this.queue.length === 0) {
          this.loader.next(false);
        }
    }

    ngOnDestroy(): void {
      this.unsubscribe.next();
      this.unsubscribe.complete();
  }
}
