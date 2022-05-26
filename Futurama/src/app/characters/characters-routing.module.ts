import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character-list.component';
import { CharacterComponent } from './character.component';
import { CharactersComponent } from './characters.component';

const routes: Routes = [{ path: '', component: CharactersComponent ,
children: [
  {path: ':id', component: CharacterListComponent},
  {path:'', component: CharacterListComponent} 
 
]

},
  
{path: '**' , redirectTo: 'CharactersComponent'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
