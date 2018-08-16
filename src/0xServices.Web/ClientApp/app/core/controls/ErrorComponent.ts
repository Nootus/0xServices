import { Component, Input } from "@angular/core";
import { NTError } from "../../fabric/exception/NTError";


@Component({
    selector: "nt-error",
    templateUrl: "./ErrorComponent.html",
    styleUrls: ["./ErrorComponent.css"]
})
export class ErrorComponent {
    @Input() message: string;
    @Input() errors: NTError[];
}
