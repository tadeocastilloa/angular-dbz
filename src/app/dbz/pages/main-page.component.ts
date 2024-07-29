import { Component } from '@angular/core';
import { DbzModule } from '../dbz.module';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  constructor( private DbzService : DbzService) {}

  get characters () : Character[] {
    return [...this.DbzService.characters];
  }

  onDeleteCharacter(id: string ) :void {
    this.DbzService.deleteCharacterById(id)
  }

  onNewCharacter ( character : Character) {
    this.DbzService.AddCharacter(character);
  }

}
