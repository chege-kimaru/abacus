import { AppService } from "../app.service";
import { Beam } from "./beam";
import { Rod } from "./rod";

export class Frame {
    width: number;
    height: number;
    borderWidth: number;
    borderColor?: string;

    beam?: Beam;
    rods: Rod[] = [];

    constructor() {
        this.width = 600;
        // this.height = 400;
        this.height = AppService.beadHeight * 9 + AppService.beamHeight + AppService.frameBorder * 2;
        // this.borderWidth = 20;
        this.borderWidth = AppService.frameBorder;
    }

    setBeam(beam: Beam) {
        this.beam = beam;
    }

    /** Ran after setting beam */
    generateRods() {
        for (let i = 0; i <= 6; i++) {
            this.rods.push(new Rod(this, this.beam!, i));
        }
    }
}