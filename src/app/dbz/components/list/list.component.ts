import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListDbzComponent {
  @Output()
  public onCharacterPosition: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
      id: uuid(),
    },
  ];

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.onCharacterPosition.emit(id);
  }
}
