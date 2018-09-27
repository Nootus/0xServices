import { Injectable }     from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Profile } from './Profile';
@Injectable()
export class AuthService {
    public challenge: BehaviorSubject<boolean>;
    private redirecturl: string;

    constructor(private profile: Profile) {
        this.challenge = new BehaviorSubject<boolean>(false);
    }

    checkLogin(url: string): boolean {
        if(this.profile.isAuthenticated === false) {
            this.redirecturl = url;
            this.challenge.next(true);
        }
        else {
            this.redirecturl = undefined;
            this.challenge.next(false);
        }

        return this.profile.isAuthenticated;
    }

    clearChallenge() {
        this.redirecturl = undefined;
        this.challenge.next(false);
    }
}