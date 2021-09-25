import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';
import { Beam } from '../models/beam';
import { Frame } from '../models/frame';

@Component({
  selector: 'app-beam',
  templateUrl: './beam.component.html',
  styleUrls: ['./beam.component.scss']
})
export class BeamComponent implements OnInit {

  @Input() beam!: Beam;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

}
