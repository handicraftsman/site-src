import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { IndexPageComponent } from './index-page/index-page.component';

import { GoglingProjectComponent } from './gogling-project/gogling-project.component';
import { LoggersProjectComponent } from './loggers-project/loggers-project.component';
import { IrcBotsProjectComponent } from './irc-bots-project/irc-bots-project.component';
import { Tiny2ProjectComponent } from './tiny2-project/tiny2-project.component';
import { UtilitiesProjectComponent } from './utilities-project/utilities-project.component';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,

    IndexPageComponent,

    GoglingProjectComponent,
    LoggersProjectComponent,
    IrcBotsProjectComponent,
    Tiny2ProjectComponent,
    UtilitiesProjectComponent,

    NotFoundPageComponent,

    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
