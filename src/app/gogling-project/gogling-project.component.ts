import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { PrismService } from '../prism.service';

@Component({
  selector: 'site-gogling-project',
  templateUrl: './gogling-project.component.html',
  styleUrls: ['./gogling-project.component.scss']
})
export class GoglingProjectComponent implements OnInit, AfterViewChecked {

  highlighted: boolean = false;

  example1: string =
`-- importing fmt package
local fmt = gogling.U.import('fmt')

-- adding a wrapped function as a handler for / route
gogling.I.Router:HandleFunc('/', gogling.U.wrap(function(session)
  -- replying with 'Hello, World!'
  fmt.Fprintln(session.writer, 'Hello, World!')
end))`;

  example2: string =
`$ cd ~/path/to/gogling
# This will generate Gopher-Lua bindings to Golang's standard library
$ ruby ./get-gostdlib.rb
# This will build generated bindgings so you could load them as plugins
$ bash ./build-gostdlib.sh`;

  constructor(private prismService: PrismService) {}
  ngOnInit() {}

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.prismService.highlightAll();
      this.highlighted = true;
    }
  }

}
