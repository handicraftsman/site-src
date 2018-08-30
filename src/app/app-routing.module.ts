import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPageComponent } from './index-page/index-page.component';

import { GoglingProjectComponent } from './gogling-project/gogling-project.component';
import { LoggersProjectComponent } from './loggers-project/loggers-project.component';
import { IrcBotsProjectComponent } from './irc-bots-project/irc-bots-project.component';
import { Tiny2ProjectComponent } from './tiny2-project/tiny2-project.component';
import { UtilitiesProjectComponent } from './utilities-project/utilities-project.component';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  // /
  { path: '', pathMatch: 'full', component: IndexPageComponent },

  // /projects/gogling
  { path: 'projects/gogling', pathMatch: 'full', component: GoglingProjectComponent },

  // /projects/loggers
  { path: 'projects/loggers', pathMatch: 'full', component: LoggersProjectComponent },

  // /projects/irc-bots
  { path: 'projects/irc-bots', pathMatch: 'full', component: IrcBotsProjectComponent },

  // /projects/tiny2
  { path: 'projects/tiny2', pathMatch: 'full', component: Tiny2ProjectComponent },

  // /projects/utilities
  { path: 'projects/utilities', pathMatch: 'full', component: UtilitiesProjectComponent },

  // 404
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
