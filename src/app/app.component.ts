import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addProject } from './features/projects/actions/project.action';
import { Project } from './features/projects/model/project.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
