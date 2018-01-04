import { Injectable } from "@angular/core";

@Injectable()
export class ValidationMessage {
    required: string = "Required!";
    email: string = "Enter valid email";
}
