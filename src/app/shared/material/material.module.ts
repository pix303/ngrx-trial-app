import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';

const modules = [MatListModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule, MatDialogModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, ...modules
  ], exports: [...modules]
})
export class MaterialModule { }
