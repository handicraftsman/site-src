import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { PrismService } from '../prism.service';

@Component({
  selector: 'site-loggers-project',
  templateUrl: './loggers-project.component.html',
  styleUrls: ['./loggers-project.component.scss']
})
export class LoggersProjectComponent implements OnInit, AfterViewChecked {

  highlighted: boolean = false;

  guoshexample1: string =
`#include <guosh.hpp>

int main() {
  Guosh::Logger::main_level = Guosh::LogLevel::DEBUG;
  Guosh::Logger log;
  log.enable_file_logging("./", "test-c++");

  log.write("write()");
  log("operator()");
  log.debug("debug");
  log.io("io");
  log.info("info");
  log.warning("warning");
  log.error("error");
  log.important("important");
  log.critical("critical %s bar", "foo");
}`;

  guoshexample2: string =
`#include <guosh.h>

int main() {
  guosh_set_main_level(GuoshLogLevel_DEBUG);
  GuoshLogger* log = guosh_logger_new("log", GuoshLogLevel_INFO);
  guosh_logger_enable_file_logging(log, "./", "test-c");

  guosh_logger_debug(log, "debug");
  guosh_logger_io(log, "io");
  guosh_logger_info(log, "info");
  guosh_logger_warning(log, "warning");
  guosh_logger_error(log, "error");
  guosh_logger_important(log, "important");
  guosh_logger_critical(log, "critical %s bar", "foo");
  
  guosh_logger_destroy(log);
  return 0;
}`;

  tinylogexample: string =
`#include <tiny-log.h>

int main() {
  tl_log_level = TLLevel_DEBUG;
  
  char* l = "main";
  tl_write(l, "tl_write()");
  tl_lwrite(TLLevel_INFO, l, "tl_lwrite()");
  
  tl_debug(l, "tl_debug()");
  tl_io(l, "tl_io()");
  tl_info(l, "tl_info()");
  tl_warning(l, "tl_warning()");
  tl_error(l, "tl_error()");
  tl_important(l, "tl_important()");
  tl_critical(l, "tl_critical()");
  
  tl_write(l, "I also support %s", "formatted printing");
  return 0;
}`;

  particlelogexample: string =
`require 'particlelog'

log = ParticleLog.new('main', ParticleLog::DEBUG)
log.write('Hello!')
log.debug('debug')
log.info('info')
log.warning('warning')
log.error('error')
log.critical('critical')
`;

  gluonexample: string =
`require "gluon"

Gluon::Logger.main_log_level = Gluon::LogLevel::DEBUG
l = Gluon::Logger.new(Gluon::LogLevel::DEBUG)
l.write("Hello!")
l.debug("debug")
l.info("info")
l.warning("warning")
l.error("error")
l.critical("critical")`;

  positronexample: string =
`import positron

positron.main_level = positron.LogLevel.DEBUG
log = positron.Logger('log', positron.LogLevel.IMPORTANT)
log.enable_file_logging()
log.debug('debug')
log.io('io')
log.info('info')
log.warning('warning')
log.error('error')
log.important('important')
log.critical('critical')
log.iochars = 'MSG'
log.io('msg')`;

  constructor(private prismService: PrismService) {}
  ngOnInit() {}

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.prismService.highlightAll();
      this.highlighted = true;
    }
  }

}
