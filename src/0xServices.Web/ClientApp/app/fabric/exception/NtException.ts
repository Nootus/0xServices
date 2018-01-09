import { NTError } from "./NTError";

export class NTException {
    //message: string;
    //errors: NTError[];

    constructor(public message: string, public errors: NTError[]) {
    
    }
}
