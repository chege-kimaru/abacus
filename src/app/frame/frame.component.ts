import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Beam } from '../models/beam';
import { Frame } from '../models/frame';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {

  totalValue = 0

  frame: Frame;
  beam: Beam;

  constructor(private appService: AppService) {
    this.frame = new Frame();
    this.beam = new Beam(this.frame);
    this.frame.setBeam(this.beam);
    this.frame.generateRods();
  }

  ngOnInit(): void {
  }

  updateTotalValue(values: { prevValue: number, newValue: number }) {
    this.totalValue = (this.totalValue - values.prevValue) + values.newValue;
    console.log(this.totalValue);
  }

}
