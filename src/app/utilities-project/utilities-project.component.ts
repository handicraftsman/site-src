import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { PrismService } from '../prism.service';

@Component({
  selector: 'site-utilities-project',
  templateUrl: './utilities-project.component.html',
  styleUrls: ['./utilities-project.component.scss']
})
export class UtilitiesProjectComponent implements OnInit, AfterViewChecked {

  highlighted: boolean = false;

  axidemo: string =
`require "./src/axi"

s = Axi::Stream(Int32, Int64).new
puts s.send(2).inspect
s.transform ->(val : Int32) { val.to_i64 }
s.on_transform ->(ival : Int32, oval : Int64) { "do something"; nil }
puts s.send(2).inspect

s2 = Axi::Stream(Int32, Int32).new
s2.transform ->(val : Int32) { val * 2 }
puts s2.send(2).inspect

class Foo < Axi::Stream(Int32, Int32)
  def i_transform(val)
    return val ** 2
  end
end

s3 = Foo.new
puts s3.send(5).inspect`;

  nxmldemo1: string =
`const nxml = require('noblexml');
const b = new nxml.XMLBuilder();

b
  .start_document()
  .write_object({
    name: 'hello',
    attrs: {'hello': 'world'},
    children: [
      'asdf',
      {
        name: 'foo',
        attrs: {'foo': 'bar'},
        children: [],
      },
    ],
  })
  .start_element('foo')
    .start_element('bar')
      .write_cdata('Hello, holy ]]> world!')
    .end_element()
    .start_element('baz')
      .start_element('quux')
  .end_document()
console.log(b.dump());`

  nxmldemo2: string =
`const fs = require('fs');
const nxml = require('./index');

var xg = new nxml.XMLObjectGetter('stream');
xg.onelem = () => {
  console.log(xg.stream[0]);
  xg.stream.shift();
}
xg.onend = () => {
  console.log('end');
}
xg.write(fs.readFileSync('./test.xml'));`;

  pmsgsession: string =
`C: {"Type": "_register", "Data": {"Name": "pluginName", "Key": "a sha256-hashed key"}}
S: {"Type": "_registered", "Data": {"Name": "pluginName"}}
OR
S: {"Type": "_alreadyRegistered", "Data": {"Name": "pluginName"}}
OR
S: {"Type": "_invalidKey", "Data": {"Key": "a sha256-hashed key"}}
OR
S: {"Type": "_blocked", "Data": {}} // means that server blocks everybody except for core
...
S: {"Type": "_ping", "Data": {}}
C: {"Type": "_pong", "Data": {}}
...
C: {"Type": "_message", "Data": {"To": "pluginName", "Message": {"Type": "aMessage", "Data": {"Some": "data"}}}}
S: {"Type": "_message", "Data": {"From": "pluginName", "Message": {"Type": "aMessage", "Data": {"Some": "data"}}}}
...
C: {"Type": "_quit", "Data": {}}
S: {"Type": "_quit", "Data": {"Reason": "Client Quit"}}`;

  ptestdemo: string =
`#include "particletest.hpp"

class sample_test : public particletest {
public:
  sample_test() : particletest("sample_test") {
    ptest_register_test("1 + 1 == 2", &sample_test::one_plus_one_is_two);
  }
  virtual ~sample_test() {}

  bool one_plus_one_is_two() {
    ptest_expect(1 + 1 == 2);

    return true;
  }
};

int main(int argc, char** argv) {
  return particletest::run_all({sample_test()});
}`;

  pdidemo: string =
`#include "particledi.hpp"

#include <iostream>

class print_service : public particledi::dependency {
public:
  print_service() {
    std::cout << "print_service initialized" << std::endl;
  }

  virtual ~print_service() {
    std::cout << "print_service destroyed" << std::endl;
  }

  void print(std::string msg) {
    std::cout << msg << std::endl;
  }
};

class a_class {
public:
  a_class(particledi::dm_ptr dm)
  : ps(dm->get<print_service>())
  {
    std::cout << "a_class initialized" << std::endl;
  }

  ~a_class() {
    std::cout << "a_class destroyed" << std::endl;
  }

  void do_something() {
    ps->print("Hello, World!");
  }

  std::shared_ptr<print_service> ps;
};

int main(int argc, char** argv) {
  particledi::dm_ptr dm = particledi::dm::create();
  dm->set<print_service>(new print_service());

  a_class c(dm);
  c.do_something();

  return 0;
}`;

  pcmddemo: string =
`require 'particlecmd'

sample = ParticleCMD::Definition.new 'add' do |d|
  d.positional 'a', description: 'First value'
  d.positional 'b', description: 'Second value'

  d.collect_extra

  d.flag 'multiply', description: 'Multiply instead of adding'

  d.option 'divide', argname: 'X', description: 'Divide the result by X'
end

require 'shellwords'
puts (sample.match ParticleCMD::Info.new Shellwords.split '1 2 3 \\\' 4 5 "6 7\' 8" --multiply --divide=123').inspect
# #<ParticleCMD::Result:0x000056286c6ab630 @extra=["3", "'", "4", "5", "6 7' 8"], @positionals={"a"=>"1", "b"=>"2"}, @flags={"multiply"=>true}, @options={"divide"=>"123"}>
# returns nil if definition and info do not match
`;

  hakepydemo: string =
`#!/usr/bin/env python3

from hake import start, task, default_task, run_tasks

@default_task
def task_default():
  run_tasks('build', 'install')

@task('build')
def task_build():
  print('Build')

@task('install')
def task_install():
  print('Install')

start()`;

  hakehydemo: string =
`#!/usr/bin/env hy

(import [hake [start def-task def-default-task run-tasks]])

(def-default-task (fn []
  (run-tasks "build" "install")))

(def-task "build" (fn []
  (print "Build")))

(def-task "install" (fn []
  (print "Install")))

(start)`;

  constructor(private prismService: PrismService) {}
  ngOnInit() {}

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.prismService.highlightAll();
      this.highlighted = true;
    }
  }

}
