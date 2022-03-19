import { Project } from "../model/project.model";
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { addProject, loadProjects, projectsLoaded, removeProject, selectProject } from "../actions/project.action";
import { state } from "@angular/animations";

// Extend State from EntityState (collection of a type) with selectedProject
export interface State extends EntityState<Project> {
  selectedProjectId: number | undefined;
  isLoading: boolean
}

// Adapter helps with CRUD api on state
export const adapter: EntityAdapter<Project> = createEntityAdapter<Project>({
  selectId: (prj: Project) => prj.id,
  sortComparer: false
})

// Init the state
export const initialState: State = adapter.getInitialState({
  selectedProjectId: undefined, isLoading: false
})

// Map every action to proper action handler
export const reducer = createReducer<State>(
  initialState,
  on(loadProjects, (state, { loading }): State => ({
    ...state,
    ...{ isLoading: loading }
  })),
  on(projectsLoaded, (state, { prjs }): State => {
    const tempState = adapter.setAll(prjs, state)
    return { ...tempState, isLoading: false }
  }),
  on(selectProject, (state, { id }): State => ({
    ...state,
    ...{ selectedProjectId: id },
  })
  ),
  on(addProject, (state, { prj }): State => adapter.addOne(prj, state)),
  on(removeProject, (state, { id }): State => adapter.removeOne(id, state)),
);


// ----------------------------------
// Project state selectors
// ----------------------------------

// Select state feature: projects
export const selectProjectsState = createFeatureSelector<State>('projects');
// Select loading
export const selectIsLoading = createSelector(selectProjectsState, state => state.isLoading);
// Select list of projects
export const selectAllProjects = createSelector(selectProjectsState, adapter.getSelectors().selectAll);
export const selectCountProjects = createSelector(selectProjectsState, adapter.getSelectors().selectTotal);
// Select last project
export const selectLastAddedProject = createSelector(selectProjectsState, state => {
  return state.entities[state.ids[state.ids.length - 1]];
});
// Selected project
export const selectedProject = createSelector(selectProjectsState, state => {
  return state.selectedProjectId ? state.entities[state.selectedProjectId] : undefined
});
