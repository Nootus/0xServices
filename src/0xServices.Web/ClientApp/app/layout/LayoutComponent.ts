import { Component } from '@angular/core';

@Component({
    selector: 'layout',
    templateUrl: './LayoutComponent.html',
    styleUrls: ['./LayoutComponent.css']
})
export class LayoutComponent {
    testvar: string = "Temp variable";
    hideNow: boolean = false;
}
