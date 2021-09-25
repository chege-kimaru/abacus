import { Bead } from "./bead";
import { Beam } from "./beam";
import { Frame } from "./frame";

export class Rod {

    /** Gap between rods */
    gap = 60;

    width: number;
    height: number;
    right: number;
    top: number;

    frame: Frame;
    beam: Beam;
    beads: Bead[] = [];

    weight: number;

    constructor(frame: Frame, beam: Beam, index: number) {
        this.frame = frame;
        this.beam = beam;

        this.width = 12;
        this.height = this.frame.height - this.frame.borderWidth * 2;
        this.right = (index * this.gap) + (index * this.width) + this.gap;
        this.top = 0;

        // generate beads
        for (let i = 0; i < 5; i++) {
            this.beads.push(new Bead(frame, beam, this, i));
        }

        // generate weight
        this.weight = 1;
        for (let i = 0; i < index; i++) {
            this.weight *= 10;
        }
    }


}