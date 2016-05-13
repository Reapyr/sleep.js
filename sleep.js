// sleep.js v0.1
// Copyright (c) 2016 Reapyr

function sleep(ms) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > ms) break;
  }
}