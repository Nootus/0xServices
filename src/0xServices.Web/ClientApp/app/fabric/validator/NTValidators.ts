import { ValidatorFn } from '@angular/forms';
import { MatchOtherValidator } from "./MatchOtherValidator";

export class NTValidators {
    static mathchOther(otherControlName: string, message: string): ValidatorFn {
        let validator: MatchOtherValidator = new MatchOtherValidator(otherControlName, message);
        return validator.validate;
    }
}
