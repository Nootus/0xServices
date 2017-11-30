import { SnackBarMessageType } from "./SnackBarMessageType";

export class SnackBarModel {
    message: string;
    duration: number;
    action: string;
    messageType: SnackBarMessageType;
}