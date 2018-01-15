export class ValidationMessage {
    static required: string = "Required!";
    static email: string = "Enter valid email";
    static maxlength(length: number): string {
        return `Exceeds maximum length of ${length}`;
    }
    static confirmPasswordMismatch: string = "Confirm password does not match";
}
