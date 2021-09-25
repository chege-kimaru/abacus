import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';
import { Rod } from '../models/rod';

@Component({
  selector: 'app-rod',
  templateUrl: './rod.component.html',
  styleUrls: ['./rod.component.scss']
})
export class RodComponent implements OnInit {

  rodTotalValue = 0;

  @Input() rod?: Rod;
  @Output() newValue = new EventEmitter<{ prevValue: number, newValue: number }>();

  valueBottom = -1 * (AppService.frameBorder + 32);
  valueRight?: number;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.valueRight = this.rod!.width / 2;
  }

  updateRodTotalValue(value: number) {
    const prevValue = this.rodTotalValue;
    console.log('In rod', value);
    console.log('Rode current taotal vale', this.rodTotalValue);
    this.rodTotalValue += value * this.rod!.weight;
    console.log('Rode next taotal vale', this.rodTotalValue);
    this.newValue.emit({ prevValue, newValue: this.rodTotalValue });
  }
}
