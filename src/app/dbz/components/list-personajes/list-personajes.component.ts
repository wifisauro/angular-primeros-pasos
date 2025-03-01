import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-list-personajes',
  standalone: false,
  templateUrl: './list-personajes.component.html',
  styleUrls: ['./list-personajes.component.css']
})
export class ListPersonajesComponent {

  @Input()
  public characterList: Character[]=[{
    name : "Trunks",
    power : 10
  }];

  // OnDelete = Index value : number
  @Output()
  OnDelete : EventEmitter<string> = new EventEmitter;
  onDeleteCharacter( id? : string): void {
    if (!id) return;

    this.OnDelete.emit(id);
  }

}
