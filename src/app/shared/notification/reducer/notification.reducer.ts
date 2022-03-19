import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { NotificationPayload, NotifyErrorAction, NotifySuccessAction, NotifyWarningAction } from "../actions/notification.actions";

export interface NotificationState {
  notifications: NotificationPayload[]
}

const initState: NotificationState = { notifications: [] };

export const reducer = createReducer(
  initState,
  on(NotifySuccessAction, (state, notification: NotificationPayload) => ({ notifications: [...state.notifications, notification] })),
  on(NotifyErrorAction, (state, notification: NotificationPayload) => ({ notifications: [...state.notifications, notification] })),
  on(NotifyWarningAction, (state, notification: NotificationPayload) => ({ notifications: [...state.notifications, notification] })),
);


export const selectNotificationFeature = createFeatureSelector<NotificationState>("notifications");

export const selectLastNotification = createSelector(selectNotificationFeature, (state) => state.notifications[state.notifications.length - 1]);
