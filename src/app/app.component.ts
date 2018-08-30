import { Component } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'site-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'site';
}
