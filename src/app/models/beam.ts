import { AppService } from "../app.service";
import { Frame } from "./frame"

export class Beam {
    width: number;
    height: number;
    top: number;
    left: number;

    frame: Frame;

    constructor(frame: Frame) {
        this.frame = frame;

        this.width = this.frame.width - this.frame.borderWidth * 2;
        // this.height = 16;
        this.height = AppService.beamHeight;
        // this.top = (this.frame.height - (this.frame.borderWidth * 2)) / 3;
        this.top = AppService.beadHeight * 3;
        this.left = 0;
    }
}