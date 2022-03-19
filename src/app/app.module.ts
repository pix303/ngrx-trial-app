import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './app-state/app.reducers';
import { HeaderModule } from './shared/components/header/header.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ProjectsModule } from './features/projects/projects.module';
import { EffectsModule } from '@ngrx/effects';
import { NotificationsModule } from './shared/notification/notifications.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    HeaderModule, ProjectsModule, NotificationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
