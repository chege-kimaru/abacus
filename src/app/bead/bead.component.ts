import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';
import { Bead } from '../models/bead';

@Component({
  selector: 'app-bead',
  templateUrl: './bead.component.html',
  styleUrls: ['./bead.component.scss']
})
export class BeadComponent implements OnInit {

  @Input() bead?: Bead;
  @Output() newValue = new EventEmitter<number>();

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  @HostListener('click', ['$event'])
  onClick() {
    // for lower deck beads except the first bead
    if (this.bead!.weight === 1) {
      if (this.bead?.active) {
        // does not apply for the first bead
        if (this.bead?.index !== 0) {
          // if the lower bead is active return 
          if (this.bead!.rod.beads[this.bead!.index - 1].active) return;
        }
      } else {
        // does not apply for the fourth bead
        if (this.bead?.index !== 3) {
          // if the lower bead is active return 
          if (!(this.bead!.rod.beads[this.bead!.index + 1].active)) return;
        }
      }
    }

    this.bead!.toggleActive();
    if (this.bead!.active) {
      this.newValue.emit(this.bead!.weight);
    } else {
      this.newValue.emit(-1 * this.bead!.weight);
    }
  }
}
