import { Component, OnInit,  AfterViewChecked} from '@angular/core';

import { PrismService } from '../prism.service';

@Component({
  selector: 'site-tiny2-project',
  templateUrl: './tiny2-project.component.html',
  styleUrls: ['./tiny2-project.component.scss']
})
export class Tiny2ProjectComponent implements OnInit, AfterViewChecked {

  highlighted: boolean = false;

  constructor(private prismService: PrismService) {}
  ngOnInit() {}

  greeterc: string =
`/*
 * test-greeter.h
 */

// Include guard
#pragma once

// Inclue tiny2-object
#include <tiny2-object.h>

// Declare a class so you could define its methods.
$class_decl(Greeter)

// Define method signatures. (constructor, vtable initializer, greet and virtual greet)
typedef Greeter* (*GreeterConstructor)(Greeter* self);
typedef void (*GreeterInitVTable)(GreeterVTable* v);
typedef void (*GreeterGreet)(Greeter* self, const char* who);
typedef void (*GreeterVGreet)(Greeter* self, const char* who);

// Define the class itself. In this example it inherits from TObject
// which can be accessed by casting to it or by accessing self->_parent
// member.
$class(Greeter, TObject, _parent)
$class_end(Greeter)

// Define methods.
$mtable(Greeter)
  $mtable_method(GreeterGreet, greet)
$mtable_end(Greeter)

// Define virtual methods.
$vtable(Greeter, TObject)
  $vtable_method(GreeterVGreet, vgreet)
$vtable_end(Greeter)

/*
 * test-greeter.c
 */

// Include the class definitio
#include "test-greeter.h"

// We'll need stdio.h for printf.
#include <stdio.h>

// Declare method implementations.
static Greeter* greeter_constructor(Greeter* self);
static void greeter_destructor(Greeter* self);
static void greeter_init_vtable(GreeterVTable* v);
static void greeter_greet(Greeter* self, const char* who);
static void greeter_vgreet(Greeter* self, const char* who);

// Declare method implementations as members of the Greeter class.
$mtable_define(Greeter, greeter_constructor, greeter_destructor, greeter_init_vtable)
  $mtable_define_method(GreeterGreet, greet, greeter_greet)
$mtable_define_end(Greeter)

// Do this with virtual method implementations. 
$vtable_define(Greeter)
  $vtable_define_method(GreeterVGreet, vgreet)
$vtable_define_end(Greeter)

static Greeter* greeter_constructor(Greeter* self) {
  // Initialize parent.
  $init(TObject, self);
  // Setup current instance and classes vtable.
  $setup(Greeter, self, greeter_destructor);
  // Return initialized instance so it could be used.
  return self;
}

static void greeter_init_vtable(GreeterVTable* v) {
  // Initialize this and parent vtable. 
  $vtable_init(v, Greeter, TObject);
  // Declare vgreet as a method of this vtable.
  $vtable_set(v, Greeter, GreeterVGreet, vgreet, greeter_vgreet);
}

static void greeter_destructor(Greeter* self) {
  // Call parent destructor.
  $destroy_parent(TObject, self);
}

static void greeter_greet(Greeter* self, const char* who) {
  printf("Hello, %s\n", who);
}

static void greeter_vgreet(Greeter* self, const char* who) {
  printf("Hello, %s\n", who);
}
`;

  titlegreeterc: string =
`/*
 * test-titlegreeter.h
 */

#pragma once

#include <tiny2-object.h>
#include "test-greeter.h"

$class_decl(TitleGreeter)

typedef TitleGreeter* (*TitleGreeterConstructor)(TitleGreeter*, const char*);
typedef void (*TitleGreeterInitVTable)(TitleGreeterVTable* v);

$class(TitleGreeter, Greeter, _parent)
  $class_property(const char*, title)
$class_end(TitleGreeter)

$mtable(TitleGreeter)
$mtable_end(TitleGreeter)

$vtable(TitleGreeter, Greeter)
$vtable_end(TitleGreeter)

/*
 * test-titlegreeter.c
 */

#include "test-titlegreeter.h"

#include <stdio.h>

static TitleGreeter* titlegreeter_constructor(TitleGreeter* self, const char* title);
static void titlegreeter_destructor(TitleGreeter* self);
static void titlegreeter_init_vtable(TitleGreeterVTable* v);
static void titlegreeter_vgreet(TitleGreeter* self, const char* who);

$mtable_define(TitleGreeter, titlegreeter_constructor, titlegreeter_destructor, titlegreeter_init_vtable)
$mtable_define_end(TitleGreeter)

$vtable_define(TitleGreeter)
$vtable_define_end(TitleGreeter)

static TitleGreeter* titlegreeter_constructor(TitleGreeter* self, const char* title) {
  $init(Greeter, self);
  $setup(TitleGreeter, self, titlegreeter_destructor);
  self->title = title;
  return self;
}

static void titlegreeter_destructor(TitleGreeter* self) {
  $destroy_parent(Greeter, self);
}

static void titlegreeter_init_vtable(TitleGreeterVTable* v) {
  $vtable_init(v, TitleGreeter, Greeter);
  $vtable_setp(v, TitleGreeter, Greeter, GreeterVGreet, vgreet, titlegreeter_vgreet);
}

static void titlegreeter_vgreet(TitleGreeter* self, const char* who) {
  printf("Hello, %s%s\n", self->title, who);
}
`

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.prismService.highlightAll();
      this.highlighted = true;
    }
  }

}
