import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { PrismService } from '../prism.service';

@Component({
  selector: 'site-irc-bots-project',
  templateUrl: './irc-bots-project.component.html',
  styleUrls: ['./irc-bots-project.component.scss']
})
export class IrcBotsProjectComponent implements OnInit, AfterViewChecked {

  highlighted: boolean = false;

  pb2build: string =
`$ git clone https://github.com/handicraftsman/particlebot2
$ cd particlebot2
$ mkdir build && cd build
$ cmake .. # -DCMAKE_BUILD_TYPE=(Release or Debug), depending on what you need
           # May need to prepend CC=gcc-8 CXX=g++-8 on Ubuntu 18.04 as this uses
           # some C++17 features
$ make
`

  pb2config: string =
`[general]
prefix = !

[server/freenode]
addr = irc.freenode.net/6667
addr = chat.freenode.net/6667

nick = YourAwesomeNickname
user = YourAwesomeUsername
pass = YourAwesomePassword
rnam = Your amazing realname

join = "##your-amazing-channel"
join = "##foo-bar-baz"

[plugin/chanop]
[plugin/fun]
[plugin/titler]
[plugin/calcs]
[plugin/urban]
[plugin/quotes]

[group/chanop]
chanop = kick
chanop = remove
chanop = kban
chanop = rban
chanop = ban
chanop = quiet
chanop = op
chanop = hop
chanop = voice

[group/fun]
fun = poke
fun = cookie

[group/quotes]
quotes = quote
quotes = add-quote
quotes = del-quote`

  pb2starting: string =
`$ ./particlebot2 -c /path/to/config.ini -l debug
# Messages below given level will not be printed
# Level for all IRC messages is io/irc
# See all levels by typing
$ ./particlebot2 --help
`

  constructor(private prismService: PrismService) {}
  ngOnInit() {}

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.prismService.highlightAll();
      this.highlighted = true;
    }
  }

}
