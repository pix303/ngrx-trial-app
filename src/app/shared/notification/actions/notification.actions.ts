import { createAction, props } from "@ngrx/store";

export enum NotificationActionTypes {
  NotifySuccess = "notification/notifySuccess",
  NotifyError = "notification/notifyError",
  NotifyWarning = "notification/notifyWarning",
}

export type NotificationPayload = {
  message: string,
  info?: string,
}

export const NotifyErrorAction = createAction(NotificationActionTypes.NotifyError, props<NotificationPayload>());
export const NotifySuccessAction = createAction(NotificationActionTypes.NotifySuccess, props<NotificationPayload>());
export const NotifyWarningAction = createAction(NotificationActionTypes.NotifyWarning, props<NotificationPayload>());
