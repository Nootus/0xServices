import { Injectable }     from '@angular/core';
import { Router }    from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Profile } from './Profile';

@Injectable()
export class AuthService {
    public challenge: BehaviorSubject<boolean>;
    private redirecturl: string;

    constructor(private router: Router, private profile: Profile) {
        this.challenge = new BehaviorSubject<boolean>(false);
    }

    checkLogin(url: string): boolean {
        if(this.profile.isAuthenticated === false) {
            this.redirecturl = url;
            this.challenge.next(true);
        }
        else {
            this.clearChallenge();
        }

        return this.profile.isAuthenticated;
    }

    private clearChallenge(): void {
        this.redirecturl = undefined;
        this.challenge.next(false);
    }

    redirectFromLogin() {
        this.router.navigateByUrl(this.redirecturl);
        this.clearChallenge();
    }
}