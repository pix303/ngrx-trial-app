import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
}


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule, MatToolbarModule
  ], exports: [HeaderComponent]
})
export class HeaderModule { }
