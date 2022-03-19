import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Inject, Input, NgModule, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

export type ConfirmDialogData = {
  title: string,
  message: string,
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData) { }
  ngOnInit(): void { }
}

@NgModule({ declarations: [ConfirmDialogComponent], imports: [CommonModule, MatDialogModule, MatButtonModule], exports: [ConfirmDialogComponent] })
export class ConfirmDialogModule { }
