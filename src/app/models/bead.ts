import { AppService } from "../app.service";
import { Beam } from "./beam";
import { Frame } from "./frame";
import { Rod } from "./rod";

export class Bead {
    baseWidth = 10;
    width: number;
    height: number;
    right: number;
    bottom: number | undefined;
    top: number | undefined;

    frame: Frame;
    beam: Beam;
    rod: Rod;

    index: number;
    weight: number;

    active = false;

    constructor(frame: Frame, beam: Beam, rod: Rod, index: number) {
        this.index = index;
        this.weight = this.index === 4 ? 5 : 1;

        this.frame = frame;
        this.beam = beam;
        this.rod = rod;

        // this.width = (this.rod.width * 2) + this.baseWidth;
        // this.height = (this.rod.width * 2) + this.baseWidth;
        this.width = this.height = AppService.beadHeight;
        this.right = (-1 * this.rod.width / 2) - (this.baseWidth / 2);
        this.bottom = this.weight === 5 ? undefined : this.index * this.height; // use bottom if weight is less than 5
        this.top = this.weight === 5 ? 0 : undefined;// use top if weight is 5
    }

    toggleActive() {
        if (this.active) {
            this.deactivate();
        } else {
            this.activate();
        }
    }

    private activate() {
        if (this.weight === 5) {
            this.top = this.height * 2;
        } else {
            this.bottom = this.bottom! + this.height * 2;
        }
        this.active = true;
    }

    private deactivate() {
        if (this.weight === 5) {
            this.top = 0;
        } else {
            this.bottom = this.index * this.height;
        }
        this.active = false;
    }
}
