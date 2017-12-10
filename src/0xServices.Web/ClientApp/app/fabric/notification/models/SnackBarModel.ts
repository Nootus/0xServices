import { SnackBarMessageType } from "./SnackBarMessageType";

export class SnackBarModel {
    message: string;
    iconCss: string;
    duration: number;
    action: string;
    messageType: SnackBarMessageType;
}