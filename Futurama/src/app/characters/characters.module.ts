import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { MaterialModule } from '../shared/material/material.module';
import { CharacterComponent } from './character.component';
import { CharacterListComponent } from './character-list.component';


@NgModule({
  declarations: [
    CharactersComponent,
    CharacterComponent,
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    MaterialModule
  ]
})
export class CharactersModule { }
