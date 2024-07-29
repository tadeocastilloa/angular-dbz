import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id: uuid(),
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public OnDelete : EventEmitter <string> = new EventEmitter();

  onDeleteCharacter(id?: string):void {
    // TODO: Emitir el ID del personaje
    if ( !id ) return;
    this.OnDelete.emit(id);
  }



}
