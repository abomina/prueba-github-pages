import { Injectable } from '@angular/core';

import { Character } from '../interfaces/character.interface';

import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000,
      id: uuid(),
    },
    {
      name: 'Goku',
      power: 9500,
      id: uuid(),
    },
    {
      name: 'Vegeta',
      power: 6000,
      id: uuid(),
    },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      ...character,
      id: uuid(),
    };
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter((ch) => ch.id !== id);
  }
}
