import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListDbzComponent } from './components/list/list.component';
import { CharacterDbzComponent } from './components/character/character.component';

@NgModule({
  declarations: [MainPageComponent, ListDbzComponent, CharacterDbzComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
})
export class DbzModule {}
