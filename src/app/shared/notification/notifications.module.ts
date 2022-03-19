import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationsBarComponent } from './components/notifications-bar/notifications-bar.component';



@NgModule({
  declarations: [NotificationsBarComponent],
  imports: [
    CommonModule, MatSnackBarModule
  ], exports: [NotificationsBarComponent]
})
export class NotificationsModule { }
