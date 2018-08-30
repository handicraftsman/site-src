import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'site-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links: string[][] = [
    [ 'Gogling', '/projects/gogling' ],
    [ 'Loggers', '/projects/loggers' ],
    [ 'IRC Bots', '/projects/irc-bots' ],
    [ 'tiny2', '/projects/tiny2' ],
    [ 'Utilities/Other', '/projects/utilities' ],
  ];

  constructor() {}
  ngOnInit() {}
}
