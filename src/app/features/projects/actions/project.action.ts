import { createAction, props, union } from "@ngrx/store";
import { Project } from "../model/project.model";

export enum ProjectActionsType {
  Load = "project/load",
  Loaded = "project/loadComplete",
  Add = "project/add",
  Added = "project/addComplete",
  Remove = "project/remove",
  Removed = "project/removeComplete",
  Select = "project/select",
};


export const loadProjects = createAction(ProjectActionsType.Load, props<{ loading: boolean }>());
export const projectsLoaded = createAction(ProjectActionsType.Loaded, props<{ prjs: Project[] }>());

export const addProject = createAction(ProjectActionsType.Add, props<{ prj: Project }>());
export const projectAdded = createAction(ProjectActionsType.Added, props<{ prj: Project }>());

export const removeProject = createAction(ProjectActionsType.Remove, props<{ id: number }>());
export const projectRemoved = createAction(ProjectActionsType.Removed);

export const selectProject = createAction(ProjectActionsType.Select, props<{ id: number }>());


// const all = union({ loadProjects, projectsLoaded, addProject, projectAdded, removeProject, projectRemoved, selectProject });
// export type ProjectActionsUnion = typeof all;
