import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonstersPageComponent } from './monsters-page.component';
import { DndModule, DndService } from 'projects/shared-library/src/public-api';

@NgModule({
  declarations: [
    MonstersPageComponent
  ],
  imports: [
    CommonModule,
    DndModule
  ],
  exports: [
    MonstersPageComponent
  ]
})
export class MonstersPageModule { }
