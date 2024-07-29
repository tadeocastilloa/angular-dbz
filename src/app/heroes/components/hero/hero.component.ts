import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {

  public name: string = 'shinichi kudo';
  public age:  number = 17;
  get capitalzedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`
  }

  changeName():void{
    this.name = 'kaito kid';
  }

  resetForm():void{
    this.name = 'shinichi kudo';
    this.age = 17;
  }

  changeAge():void{
    this.age = 24;
  }
}
