import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  static beadHeight = 32;
  static beamHeight = 16;
  static frameBorder = 20;

  constructor() { }
}
