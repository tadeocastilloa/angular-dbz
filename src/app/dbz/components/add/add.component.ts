import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  @Output()
  onNewCharacter : EventEmitter <Character> = new EventEmitter();

  public character: Character = {
    id: uuid(),
    name: '',
    power: 0
  };

  emitCharacter () :void {
    debugger;
    console.log(this.character)
    if ( this.character.name.length === 0 ) return;
    this.onNewCharacter.emit(this.character);
    this.character = {id: uuid(), name: '', power:0}
  }

}
