import { NTError } from "./NTError";

export class NTException {
    constructor(public message: string, public errors: NTError[]) {
    
    }
}
