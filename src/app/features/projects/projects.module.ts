import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { EffectsModule } from '@ngrx/effects';
import { ProjectEffects } from './effects/project.effects';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ProjectsListComponent],
  imports: [
    CommonModule, MaterialModule, HttpClientModule, EffectsModule.forFeature([ProjectEffects])
  ], exports: [ProjectsListComponent]
})
export class ProjectsModule { }
