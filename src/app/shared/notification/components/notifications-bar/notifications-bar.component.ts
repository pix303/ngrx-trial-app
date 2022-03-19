import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NotificationPayload } from '../../actions/notification.actions';
import { selectLastNotification } from '../../reducer/notification.reducer';

@Component({
  selector: 'app-notifications-bar',
  template: '<div></div>',
  styleUrls: ['./notifications-bar.component.scss']
})
export class NotificationsBarComponent implements OnInit {
  notifications$: Observable<NotificationPayload> = new Observable();

  constructor(public snackBarService: MatSnackBar, private readonly store: Store) { }

  ngOnInit(): void {
    this.notifications$ = this.store.pipe(select(selectLastNotification));
    this.notifications$.subscribe(lastNotification => {
      this.snackBarService.open(lastNotification.message, "Close", { duration: 5000 });
    })
  }

}
