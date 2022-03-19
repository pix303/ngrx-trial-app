import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromProject from 'src/app/features/projects/reducers/project.reducer';
import * as fromNotification from 'src/app/shared/notification/reducer/notification.reducer';

export interface State {
  projects: fromProject.State,
  notifications: fromNotification.NotificationState,
}

export const reducers: ActionReducerMap<State> = {
  projects: fromProject.reducer,
  notifications: fromNotification.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
