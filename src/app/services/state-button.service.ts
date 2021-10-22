import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateButtonService {

  isActive: boolean = false;

  enable() {
    this.isActive = true;
  }

  disable() {
    this.isActive = false;
  }


  constructor() { }
}
