import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Project } from '../../model/project.model';
import { loadProjects, removeProject, selectProject } from '../../actions/project.action';
import { selectAllProjects, selectCountProjects, selectedProject, selectIsLoading } from '../../reducers/project.reducer';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  projects$: Observable<(Project | undefined)[]> = new Observable();
  totalProjects$: Observable<number> = new Observable();
  loading$: Observable<boolean> = new Observable();
  selectedProject$: Observable<Project | undefined> = new Observable();

  constructor(private readonly store: Store, public dialogWrapper: MatDialog) { }

  ngOnInit(): void {
    this.projects$ = this.store.pipe(
      select(selectAllProjects)
    );
    this.totalProjects$ = this.store.pipe(
      select(selectCountProjects)
    );
    this.loading$ = this.store.pipe(
      select(selectIsLoading)
    );
    this.selectedProject$ = this.store.pipe(
      select(selectedProject)
    );

    this.store.dispatch(loadProjects({ loading: true }));
  }

  onRemove = (id: number | undefined): void => {
    if (id) {
      const dialgoRef = this.dialogWrapper.open(ConfirmDialogComponent, { data: { title: "Attention", message: "Do you want proceed with remove item?" } });
      dialgoRef.afterClosed().subscribe(res => {
        if (res) {
          this.store.dispatch(removeProject({ id }))
        }
      })
    }
  }

  onSelectItem = (id: number | undefined): void => {
    if (id !== undefined) {
      this.store.dispatch(selectProject({ id }));
    }
  }

}
