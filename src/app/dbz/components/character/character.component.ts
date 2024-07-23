import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css',
})
export class CharacterDbzComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: '',
    name: '',
    power: 0,
  };

  emitCharacter() {
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.character = {
      id: '',
      name: '',
      power: 0,
    };
  }
}
