import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3> Counter: {{ counter}}</h3>
<button (click)="increaseBy('1')"> +1 </button>
<button (click)="increaseBy('-1')"> -1 </button>
<button (click)="reset()">RESET</button>
`})

export class CounterComponent {
  public counter: number = 10;
  increaseBy(value : string):void{
  if (value == '1') {
    this.counter += 1;
  }
  if (value == '-1') {
    this.counter -= 1;
  }
  }
  reset ():void {
    this.counter = 10;
  }
  constructor() { }
}
