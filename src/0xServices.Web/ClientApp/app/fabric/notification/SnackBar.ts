import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material';

@Injectable()
export class SnackBar {
    constructor(private matSnackBar: MatSnackBar) { }

    public showError(message: string): void {

    }

}
