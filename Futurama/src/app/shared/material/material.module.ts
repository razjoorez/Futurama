import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';




@NgModule({
  
  exports: [
   MatCardModule,
   MatListModule
  ]
})
export class MaterialModule { }
