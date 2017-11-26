import { Component, Input } from '@angular/core';

@Component({
    selector: 'button-icon',
    templateUrl: './ButtonIconComponent.html',
    styleUrls: ['./ButtonIconComponent.css']
})
export class ButtonIconComponent {
    @Input() tooltip: string
}
