import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListHeroesComponent } from './list/list.component';

@NgModule({
  declarations: [HeroComponent, ListHeroesComponent],
  exports: [HeroComponent, ListHeroesComponent],
  imports: [CommonModule],
})
export class HeroesModule {}
