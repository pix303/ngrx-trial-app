import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { NotifyErrorAction, NotifySuccessAction } from "src/app/shared/notification/actions/notification.actions";
import { loadProjects, projectRemoved, projectsLoaded, removeProject } from "../actions/project.action";
import { ProjectsService } from "./projects.service";

@Injectable()
export class ProjectEffects {

  loadProjects$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadProjects),
      switchMap(() => this.service.getAll()),
      switchMap(result => [
        projectsLoaded({ prjs: result }),
        NotifySuccessAction({ message: "Projects loaded with success!" })
      ]),
      catchError((err) => of(NotifyErrorAction({ message: "Error on retrive projects" })))
    )
  });

  currentId = 0;

  removeProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(removeProject),
      map(action => action.id),
      tap(id => this.currentId = id),
      switchMap((id) => this.service.removeItem(id)),
      switchMap(result => [
        projectRemoved(),
        NotifySuccessAction({ message: `Project ${this.currentId} removed successfully` })
      ]),
      catchError((err) => of(NotifyErrorAction({ message: "Error on delete project" })))
    )
  });

  constructor(private actions$: Actions, private service: ProjectsService) { }
}
